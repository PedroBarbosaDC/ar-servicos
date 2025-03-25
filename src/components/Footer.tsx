import Link from 'next/link'
import Logo from './Logo'
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Sobre */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <Logo className="w-24 h-24" />
              <span className="text-2xl font-bold">AR Serviços Ambientais</span>
            </div>
            <p className="text-gray-400 text-center md:text-left">
              Soluções ambientais completas e profissionais para sua empresa.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <FaWhatsapp className="text-green-500" />
                <a href="https://wa.me/5583981856499" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  (83) 98185-6499
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-gray-400" />
                <a href="mailto:contato@arservicos.com.br" className="text-gray-400 hover:text-white transition-colors">
                  contato@arservicos.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                <span className="text-gray-400">Itaporanga, PB</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Redes Sociais e Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AR Serviços Ambientais. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 