import { Sparkles, Github, Twitter, Linkedin, Heart, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-yellow-400" size={20} />
              <h3 className="text-lg font-bold text-gray-900">Lumino</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Potencializando conversas inteligentes com IA avançada para
              negócios e indivíduos.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Recursos
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Planos
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#docs"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Documentação
                </a>
              </li>
              <li>
                <a
                  href="#api"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  API
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#changelog"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Legal & Contato
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#privacy"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © {currentYear} Lumino • Powered by Inteligência & Luz ✨
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <span>Feito com</span>
            <Heart className="mx-1 text-red-500" size={14} />
            <span>no Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
