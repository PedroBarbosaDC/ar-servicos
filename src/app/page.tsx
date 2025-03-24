import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Ambiente sustentável"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Soluções Ambientais Precisas e Confiáveis
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Especialistas em monitoramento ambiental, modelagem e soluções sustentáveis para aterros sanitários, reservas legais e mais.
              </p>
              <div className="flex gap-4">
                <Link href="/contato" className="btn btn-primary">
                  Fale Conosco
                </Link>
                <a
                  href="https://wa.me/5583981856499"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <FaWhatsapp className="mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center mb-16">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para começar seu projeto ambiental?
          </h2>
          <p className="text-xl mb-8">
            Entre em contato conosco e descubra como podemos ajudar
          </p>
          <Link href="/contato" className="btn bg-white text-primary-600 hover:bg-gray-100">
            Solicitar Orçamento
          </Link>
        </div>
      </section>
    </main>
  )
}

const services = [
  {
    title: 'Monitoramento de Aterros Sanitários',
    description: 'Soluções completas para monitoramento ambiental de aterros sanitários, incluindo controle de gases, líquidos percolados e mais.',
  },
  {
    title: 'Monitoramento de Reserva Legal',
    description: 'Mapeamento e monitoramento de reservas legais com tecnologia de ponta e relatórios detalhados.',
  },
  {
    title: 'Monitoramento de PRAD',
    description: 'Plano de Recuperação de Áreas Degradadas com monitoramento contínuo e relatórios técnicos.',
  },
  {
    title: 'Georreferenciamento',
    description: 'Serviços de mapeamento e regularização fundiária com precisão e conformidade legal.',
  },
  {
    title: 'Monitoramento de Particulados',
    description: 'Medição e análise da qualidade do ar em tempo real com equipamentos de última geração.',
  },
  {
    title: 'Modelagem Ambiental',
    description: 'Simulações computacionais avançadas para análise de dispersão de contaminantes no ar.',
  },
] 