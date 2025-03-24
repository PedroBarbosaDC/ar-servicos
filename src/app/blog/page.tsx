import Link from 'next/link'
import Image from 'next/image'

const blogPosts = [
  {
    id: 1,
    title: 'Importância do Monitoramento Ambiental em Aterros Sanitários',
    excerpt: 'Entenda por que o monitoramento ambiental é crucial para a operação segura e sustentável de aterros sanitários.',
    date: '15 de Março, 2024',
    category: 'Técnico',
    image: '/images/blog/aterro-sanitario.jpg',
  },
  {
    id: 2,
    title: 'Tecnologias Inovadoras no Monitoramento de Reservas Legais',
    excerpt: 'Conheça as últimas tecnologias utilizadas para monitoramento e preservação de reservas legais.',
    date: '10 de Março, 2024',
    category: 'Inovação',
    image: '/images/blog/reserva-legal.jpg',
  },
  {
    id: 3,
    title: 'Modelagem Ambiental: Ferramenta Essencial para Gestão de Riscos',
    excerpt: 'Saiba como a modelagem ambiental pode ajudar na identificação e gestão de riscos ambientais.',
    date: '5 de Março, 2024',
    category: 'Técnico',
    image: '/images/blog/modelagem.jpg',
  },
]

export default function Blog() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container">
          <h1 className="section-title text-center mb-8">
            Blog e Notícias
          </h1>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            Fique por dentro das últimas novidades do setor ambiental e artigos técnicos sobre monitoramento e sustentabilidade.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-primary-600 font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                  >
                    Ler mais
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Receba Nossas Atualizações
          </h2>
          <p className="text-xl mb-8">
            Inscreva-se em nossa newsletter para receber as últimas notícias e artigos técnicos
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-4 py-2 rounded-md text-gray-900"
              required
            />
            <button type="submit" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Inscrever-se
            </button>
          </form>
        </div>
      </section>
    </main>
  )
} 