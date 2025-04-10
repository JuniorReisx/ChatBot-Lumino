import { useState } from "react";
import {
  Sparkles,
  Menu,
  X,
  Settings,
  HelpCircle,
  User,
} from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-white text-gray-900 shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="text-yellow-400" size={24} />
          <h1 className="text-xl font-bold text-[#4F8CFD]">Lumino</h1>
          <span className="hidden md:inline-block text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-medium ml-2">
            Beta
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className="font-medium hover:text-blue-600 transition-colors"
          >
            Recursos
          </a>
          <a
            href="#pricing"
            className="font-medium hover:text-blue-600 transition-colors"
          >
            Planos
          </a>
          <a
            href="#about"
            className="font-medium hover:text-blue-600 transition-colors"
          >
            Sobre
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 font-medium py-1.5 px-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            <User size={16} />
            <span>Minha Conta</span>
          </button>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white py-3 px-4 border-t border-gray-200">
          <nav className="flex flex-col gap-3">
            <a
              href="#features"
              className="py-2 px-3 rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-colors"
            >
              Recursos
            </a>
            <a
              href="#pricing"
              className="py-2 px-3 rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-colors"
            >
              Planos
            </a>
            <a
              href="#about"
              className="py-2 px-3 rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-colors"
            >
              Sobre
            </a>
            <a
              href="#account"
              className="py-2 px-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <User size={16} />
              <span>Minha Conta</span>
            </a>
            <div className="flex gap-2 mt-2">
              <button className="flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-100 transition-colors">
                <HelpCircle size={16} />
                <span>Ajuda</span>
              </button>
              <button className="flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-100 transition-colors">
                <Settings size={16} />
                <span>Configurações</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
    