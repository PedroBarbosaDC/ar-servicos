import Image from 'next/image'

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container">
          <h1 className="section-title text-center mb-8">
            Nossa História
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <p className="mb-6">
                Nossa jornada começou dentro de um aterro sanitário, onde identificamos uma necessidade urgente: monitoramento ambiental eficiente e preciso para garantir a sustentabilidade e conformidade com a legislação.
              </p>
              <p className="mb-6">
                A empresa nasceu dentro do próprio terreno, como um projeto incubado para desenvolver tecnologias e metodologias inovadoras de monitoramento para desenvolver tecnologias e metodologias inovadoras de monitoramento ambiental. No início, nossa equipe foi formada por engenheiros e especialistas que trabalharam diretamente no local, coletando dados, analisando amostras e desenvolvendo sistemas para melhoria do controle ambiental da área.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4">Do Campo para o Mercado</h2>
              <p className="mb-6">
                Com o tempo, percebemos que os desafios enfrentados no aterro sanitário eram comuns a diversos setores, como prefeituras, áreas de preservação e emissores de poluentes atmosféricos. Foi então que expandimos nossos serviços, aplicando a expertise adquirida no aterro sanitário para monitoramento de reservas legais, Prads, georreferenciamento, controle de particulados e modelagem de dispersão de contaminantes no ar.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4">Crescimento e Inovação</h2>
              <p className="mb-6">
                Com o uso de tecnologias avançadas, como drones, sensores ambientais, softwares de modelagem e sistemas de georreferenciamento, nos tornamos referência no setor, soluções ambientais precisas e confiáveis.
              </p>
              <p className="mb-6">
                Nosso compromisso com a inovação e a sustentabilidade impulsionou parcerias estratégicas com empresas privadas e centros de pesquisa, consolidando nossa posição como uma das principais empresas de monitoramento ambiental no mercado.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4">O Futuro</h2>
              <p className="mb-6">
                Hoje, seguimos expandindo nossas soluções e aprimorando nossas metodologias, sempre com o compromisso de garantir que empreendimentos e atividades humanas coexistam em equilíbrio com o meio ambiente. Nossa missão continua sendo oferecer monitoramento ambiental de alta qualidade, ajudando empresas e gestores a tomarem decisões baseadas em dados específicos para um futuro mais sustentável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-primary-600 mb-4">Missão</h2>
              <p className="text-gray-600">
                Fornecer soluções ambientais precisas e confiáveis, promovendo o desenvolvimento sustentável e garantindo o cumprimento da legislação ambiental.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-primary-600 mb-4">Visão</h2>
              <p className="text-gray-600">
                Ser referência no mercado em monitoramento ambiental, reconhecida pela inovação, qualidade técnica e compromisso com a preservação ambiental.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-primary-600 mb-4">Valores</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  Precisão Técnica – Utilização de metodologias científicas e tecnológicas avançadas para resultados confiáveis.
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  Ética e Transparência – Trabalhar com integridade e clareza na comunicação com clientes e órgãos ambientais.
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  Inovação – Buscar constantemente novas tecnologias e práticas ambientais eficientes.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Market Differentiators */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center mb-16">
            Diferenciais no Mercado
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-primary-600 mb-6">
                Uso de Tecnologia Avançada
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  Aplicação de drones para monitoramento de áreas e emissões furtivas.
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  Sensores de última geração para análise da qualidade do ar, água e solo.
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  Softwares modernos para modelagem e previsão de dispersão de poluentes.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 