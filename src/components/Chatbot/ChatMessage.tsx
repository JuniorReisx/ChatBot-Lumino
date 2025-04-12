import { useEffect, useState } from "react";
import {
  ThumbsUp,
  ThumbsDown,
  Copy,
  MoreHorizontal,
  User,
  Sparkles,
} from "lucide-react";
import { promptGemini } from "../../services/chatbotAPI";

type ChatMessageProps = {
  sender: "user" | "bot";
  text: string;
  timestamp?: Date;
  isTyping?: boolean;
  avatarUrl?: string;
};

export function ChatMessage({
  sender,
  text,
  timestamp = new Date(),
  isTyping = false,
  avatarUrl,
}: ChatMessageProps) {
  const isUser = sender === "user";
  const [showActions, setShowActions] = useState(false);
  const [copied, setCopied] = useState(false);
  const [messageText, setMessageText] = useState(text);
  const [loading, setLoading] = useState(isTyping);

  useEffect(() => {
    const fetchBotReply = async () => {
      if (sender === "bot" && text === "[IA_RESPONSE]") {
        setLoading(true);
        try {
          const reply = await promptGemini("Olá! Em que posso ajudar?");
          setMessageText(reply);
        } catch (error) {
          setMessageText("Ocorreu um erro ao gerar a resposta.");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchBotReply();
  }, [sender, text]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const renderTypingIndicator = () => (
    <div className="flex space-x-1 items-center h-6 py-3">
      {[0, 150, 300].map((delay) => (
        <div
          key={delay}
          className="w-2 h-2 rounded-full bg-blue-400 animate-bounce"
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </div>
  );

  return (
    <div
      className={`flex items-start gap-2 group mb-4 ${isUser ? "flex-row-reverse" : "flex-row"}`}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className={`flex-shrink-0 ${isUser ? "ml-2" : "mr-2"}`}>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isUser ? "bg-green-100" : "bg-blue-100"
          }`}
        >
          {avatarUrl ? (
            <img src={avatarUrl} alt={isUser ? "Usuário" : "Lumino"} className="w-8 h-8 rounded-full" />
          ) : isUser ? (
            <User size={16} className="text-green-600" />
          ) : (
            <Sparkles size={16} className="text-blue-600" />
          )}
        </div>
      </div>

      <div
        className={`relative max-w-[75%] px-4 py-3 rounded-2xl text-sm ${
          isUser
            ? "bg-green-50 border border-green-100 text-gray-800"
            : "bg-blue-50 border border-blue-100 text-gray-800"
        }`}
      >
        <div className="whitespace-pre-wrap break-words">
          {loading && !isUser ? renderTypingIndicator() : messageText}
        </div>

        <div className={`text-xs text-gray-500 mt-1 ${isUser ? "text-right" : "text-left"}`}>
          {formatTime(timestamp)}
        </div>

        {showActions && !loading && (
          <div
            className={`absolute ${
              isUser ? "left-0 -translate-x-full" : "right-0 translate-x-full"
            } top-1/2 -translate-y-1/2 flex items-center gap-1 bg-white p-1 rounded-lg shadow-md border border-gray-100`}
          >
            {!isUser && (
              <>
                <button className="p-1 hover:bg-gray-100 rounded-full" title="Útil">
                  <ThumbsUp size={14} />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded-full" title="Não útil">
                  <ThumbsDown size={14} />
                </button>
              </>
            )}
            <button
              className="p-1 hover:bg-gray-100 rounded-full"
              title={copied ? "Copiado!" : "Copiar texto"}
              onClick={copyToClipboard}
            >
              <Copy size={14} className={copied ? "text-blue-500" : ""} />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded-full" title="Mais opções">
              <MoreHorizontal size={14} />
            </button>
          </div>
        )}

        {copied && (
          <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-black text-white text-xs px-2 py-1 rounded shadow-md">
            Copiado!
          </div>
        )}
      </div>
    </div>
  );
}
