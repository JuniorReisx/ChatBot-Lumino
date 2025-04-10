import { useState, useRef, useEffect } from "react";
import { SendHorizonal, Mic, Paperclip, Smile, Sparkles } from "lucide-react";

type InputBarProps = {
  onSend: (text: string) => void;
  isLoading?: boolean;
  placeholder?: string;
};

export function InputBar({
  onSend,
  isLoading = false,
  placeholder = "Digite sua mensagem...",
}: InputBarProps) {
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Submit on Ctrl+Enter or Command+Enter
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      if (input.trim()) {
        onSend(input);
        setInput("");
      }
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const toggleEmojiPicker = () => {
    setIsEmojiPickerOpen(!isEmojiPickerOpen);
  };

  const simulateAIAssist = () => {
    alert("Sugestão de AI ativada!");
  };

  return (
    <div className="border-t border-gray-200 pt-4 bg-white rounded-b-lg">
      {isEmojiPickerOpen && (
        <div className="p-2 mb-2 border border-gray-200 rounded-lg bg-white shadow-md">
          <p className="text-xs text-gray-500 text-center">
            Seletor de emojis apareceria aqui
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <div className="flex items-center gap-2 mr-2">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={toggleEmojiPicker}
            aria-label="Abrir seletor de emojis"
          >
            <Smile size={18} />
          </button>
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Anexar arquivo"
          >
            <Paperclip size={18} />
          </button>
        </div>

        <div className="relative flex-1">
          <input
            ref={inputRef}
            type="text"
            placeholder={placeholder}
            className="w-full border border-gray-200 rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all pr-10"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          {input.length > 0 && (
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={() => setInput("")}
              aria-label="Limpar texto"
            >
              <span className="text-xs font-medium">×</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className={`p-2 rounded-full transition-colors ${
              isRecording
                ? "bg-red-100 text-red-500 animate-pulse"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            }`}
            onClick={toggleRecording}
            aria-label={
              isRecording ? "Parar gravação" : "Iniciar gravação de voz"
            }
          >
            <Mic size={18} />
          </button>

          <button
            type="button"
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={simulateAIAssist}
            aria-label="Obter sugestão da IA"
          >
            <Sparkles size={18} />
          </button>

          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className={`bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center ${
              !input.trim() || isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            aria-label="Enviar mensagem"
          >
            <SendHorizonal size={18} />
          </button>
        </div>
      </form>

      <div className="mt-2 px-4">
        <p className="text-xs text-gray-500 text-center">
          {isLoading ? "Processando..." : "Pressione Ctrl + Enter para enviar"}
        </p>
      </div>
    </div>
  );
}
