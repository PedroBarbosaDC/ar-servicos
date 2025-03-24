import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const services = [
  {
    title: 'Monitoramento de Aterros Sanitários',
    description: 'Soluções completas para monitoramento ambiental de aterros sanitários, incluindo controle de gases, líquidos percolados e mais.',
    features: [
      'Permeabilidade da camada de cobertura',
      'Densidade camada cobertura – in situ',
      'Controle de gases (metano CH4) – on-line',
      'Líquidos percolados (chorume) – on-line',
      'Geotécnico (sensores de inclinação) – on-line',
      'Emissões Furtivas (metano CH4) – Drone',
      'Águas subterrâneas e superficiais',
      'Monitoramento de particulados (MP 2,5 e MP 10) – on-line',
      'Relatórios para órgãos reguladores',
    ],
  },
  {
    title: 'Monitoramento de Reserva Legal',
    description: 'Mapeamento e monitoramento de reservas legais com tecnologia de ponta e relatórios detalhados.',
    features: [
      'Mapeamento por satélite e drones',
      'Relatórios de conformidade ambiental',
    ],
  },
  {
    title: 'Monitoramento de PRAD',
    description: 'Plano de Recuperação de Áreas Degradadas com monitoramento contínuo e relatórios técnicos.',
    features: [
      'Mapeamento por satélite e drones',
      'Emissões Furtivas (metano CH4) – Drone',
      'Emissões Furtivas (metano CH4) – on-line',
      'Laudos técnicos para órgãos ambientais',
    ],
  },
  {
    title: 'Georreferenciamento',
    description: 'Serviços de mapeamento e regularização fundiária com precisão e conformidade legal.',
    features: [
      'Mapeamento e regularização fundiária (INCRA)',
      'Levantamento topográfico',
      'Cadastro Ambiental Rural (CAR)',
    ],
  },
  {
    title: 'Monitoramento de Particulados',
    description: 'Medição e análise da qualidade do ar em tempo real com equipamentos de última geração.',
    features: [
      'Medição da qualidade do ar em tempo real (MP 2.5 e MP 10) – on-line',
      'Modelagem e análise de dispersão de poluentes',
    ],
  },
  {
    title: 'Modelagem de Dispersão de Contaminantes no Ar',
    description: 'Simulações computacionais avançadas para análise de dispersão de contaminantes no ar.',
    features: [
      'Simulações computacionais avançadas',
      'Avaliação de risco à saúde pública',
    ],
  },
]

export default function Services() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container">
          <h1 className="section-title text-center mb-8">
            Nossos Serviços
          </h1>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            Oferecemos soluções completas em monitoramento ambiental, utilizando tecnologia de ponta e metodologias inovadoras para garantir resultados precisos e confiáveis.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-600 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-600">
                        <FaArrowRight className="mt-1 mr-2 text-primary-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contato"
                    className="btn btn-primary w-full text-center"
                  >
                    Solicitar Orçamento
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Precisa de mais informações sobre nossos serviços?
          </h2>
          <p className="text-xl mb-8">
            Entre em contato conosco e descubra como podemos ajudar com sua necessidade específica
          </p>
          <Link href="/contato" className="btn bg-white text-primary-600 hover:bg-gray-100">
            Fale Conosco
          </Link>
        </div>
      </section>
    </main>
  )
} 