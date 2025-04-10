import { useState } from "react";
import { ChatBot } from "../../components/Chatbot/ChatBot";
import {
  Sparkles,
  MessageSquare,
  Zap,
  Shield,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

export function Home() {
  const [showFeatures, setShowFeatures] = useState(false);

  const toggleFeatures = () => {
    setShowFeatures(!showFeatures);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="flex-grow flex flex-col items-center px-4 py-10">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center bg-blue-100 text-blue-600 px-4 py-1 rounded-full mb-6">
            <Sparkles size={16} className="mr-2" />
            <span className="text-sm font-medium">Nova Versão Disponível</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Bem-vindo ao{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Lumino
            </span>{" "}
            ✨
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Seu assistente pessoal potencializado por inteligência artificial.
            Faça perguntas, obtenha respostas e veja a mágica acontecer!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {/* <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
              <MessageSquare size={18} className="mr-2" />
              Iniciar Chat
            </button>
            <button className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
              Saiba Mais
            </button> */}
          </div>
        </div>
        {/* 
            <div className="w-full max-w-4xl mx-auto mb-16 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-3 flex items-center">
                <Sparkles className="text-yellow-400 mr-2" size={20} />
                <h2 className="font-semibold text-gray-900">Lumino Chat</h2>
            </div>
            <div className="p-6">
                    
            </div>
            </div> */}

        <ChatBot />

        <div className="w-full max-w-4xl mx-auto mb-16">
          <div
            className="flex items-center justify-between cursor-pointer p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors mb-6"
            onClick={toggleFeatures}
          >
            <h2 className="text-xl font-bold text-gray-900">
              Recursos do Lumino
            </h2>
            {showFeatures ? (
              <ChevronDown size={20} />
            ) : (
              <ChevronRight size={20} />
            )}
          </div>

          {showFeatures && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare size={24} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  Conversas Naturais
                </h3>
                <p className="text-gray-600">
                  Interaja de forma natural e obtenha respostas contextualizadas
                  para suas perguntas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap size={24} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  Respostas Rápidas
                </h3>
                <p className="text-gray-600">
                  Obtenha informações precisas e relevantes em questão de
                  segundos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield size={24} className="text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  Segurança
                </h3>
                <p className="text-gray-600">
                  Suas conversas são protegidas e seus dados permanecem
                  privados.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="w-full max-w-4xl mx-auto bg-blue-50 rounded-lg p-8 border border-blue-100">
          <div className="flex flex-col items-center text-center">
            <p className="text-lg italic text-gray-700 mb-4">
              "O Lumino revolucionou a forma como interagimos com informações. É
              como ter um especialista ao seu lado 24 horas por dia."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
              <div>
                <h4 className="font-medium text-gray-900">Maria Silva</h4>
                <p className="text-sm text-gray-600">CEO, TechInova</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
