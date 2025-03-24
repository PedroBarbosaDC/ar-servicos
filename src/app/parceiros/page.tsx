export default function Partners() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container">
          <h1 className="section-title text-center mb-8">
            Nossos Parceiros
          </h1>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            Trabalhamos em conjunto com empresas e instituições de renome para oferecer as melhores soluções ambientais.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Add partner logos here */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <p>Logo do Parceiro 1</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <p>Logo do Parceiro 2</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <p>Logo do Parceiro 3</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <p>Logo do Parceiro 4</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Quer se tornar um parceiro?
          </h2>
          <p className="text-xl mb-8">
            Entre em contato conosco e descubra como podemos trabalhar juntos
          </p>
          <a
            href="mailto:contato@arservicosambientais.com.br"
            className="btn bg-white text-primary-600 hover:bg-gray-100"
          >
            Fale Conosco
          </a>
        </div>
      </section>
    </main>
  )
} 