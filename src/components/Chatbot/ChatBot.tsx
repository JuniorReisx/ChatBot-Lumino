import { useState, useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import { InputBar } from "./InputBar";
import { promptGemini } from "../../services/chatbotAPI";
import { Message } from "../../types/index";
import { Bot, Trash2, Download, Settings, X } from "lucide-react";

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (showWelcome && messages.length === 0) {
      const welcomeMessage: Message = {
        sender: "bot",
        text: "Olá! Eu sou o Lumino, seu assistente virtual. Como posso ajudar você hoje?",
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [showWelcome, messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async (userText: string) => {
    const newUserMessage: Message = {
      sender: "user",
      text: userText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newUserMessage]);

    setIsLoading(true);

    try {
      const botReply = await promptGemini(userText);

      setIsLoading(false);

      const botMessage: Message = {
        sender: "bot",
        text: botReply,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Erro ao obter resposta do Gemini:", error);
      setIsLoading(false);
      const errorMessage: Message = {
        sender: "bot",
        text: "Desculpe, tive um problema ao processar sua mensagem. Pode tentar novamente?",
        timestamp: new Date(),
        isError: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setShowWelcome(true);
  };

  const downloadChat = () => {
    const chatText = messages
      .map(
        (msg) =>
          `[${msg.timestamp?.toLocaleString() || "Unknown time"}] ${
            msg.sender === "user" ? "Você" : "Lumino"
          }: ${msg.text}`
      )
      .join("\n\n");

    const blob = new Blob([chatText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `lumino-chat-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl border border-gray-200 shadow-lg bg-white flex flex-col h-[600px]">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="bg-blue-100 p-1.5 rounded-full">
            <Bot size={18} className="text-blue-600" />
          </div>
          <div>
            <h2 className="font-medium text-gray-900">Lumino Assistente</h2>
            <p className="text-xs text-gray-500">
              {isLoading ? "Digitando..." : "Online"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Configurações"
          >
            <Settings size={16} />
          </button>
          <button
            onClick={downloadChat}
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Baixar conversa"
          >
            <Download size={16} />
          </button>
          <button
            onClick={clearChat}
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Limpar conversa"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {isSettingsOpen && (
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-gray-900">Configurações</h3>
            <button
              onClick={() => setIsSettingsOpen(false)}
              className="p-1 text-gray-500 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Fechar configurações"
            >
              <X size={16} />
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <label
                htmlFor="welcome-message"
                className="text-sm text-gray-700"
              >
                Mensagem de boas-vindas
              </label>
              <input
                type="checkbox"
                id="welcome-message"
                checked={showWelcome}
                onChange={() => setShowWelcome(!showWelcome)}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="chat-theme" className="text-sm text-gray-700">
                Tema do chat
              </label>
              <select
                id="chat-theme"
                className="text-sm border border-gray-200 rounded-md px-2 py-1"
              >
                <option value="light">Claro</option>
                <option value="dark">Escuro</option>
                <option value="system">Sistema</option>
              </select>
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <ChatMessage
            key={i}
            sender={msg.sender}
            text={msg.text}
            timestamp={msg.timestamp}
          />
        ))}

        {isLoading && (
          <ChatMessage
            sender="bot"
            text=""
            isTyping={true}
            timestamp={new Date()}
          />
        )}

        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center p-6">
            <div className="bg-blue-100 p-3 rounded-full mb-3">
              <Bot size={24} className="text-blue-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Lumino Assistente
            </h3>
            <p className="text-gray-500 max-w-sm">
              Olá! Estou aqui para responder suas perguntas e ajudar com o que
              precisar. Como posso ajudar você hoje?
            </p>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-200">
        <InputBar
          onSend={handleSend}
          isLoading={isLoading}
          placeholder="Digite sua mensagem..."
        />
      </div>
    </div>
  );
}
