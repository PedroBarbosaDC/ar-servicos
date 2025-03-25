'use client'

import { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { FaWhatsapp, FaEnvelope, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa'

const mapContainerStyle = {
  width: '100%',
  height: '400px',
}

const center = {
  lat: -7.119495, // Replace with your actual coordinates
  lng: -34.845011,
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container">
          <h1 className="section-title text-center mb-8">
            Entre em Contato
          </h1>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            Estamos prontos para ajudar com suas necessidades ambientais. Entre em contato conosco através do formulário abaixo ou use nossos canais de comunicação direta.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Informações de Contato</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaWhatsapp className="text-primary-600 text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/5583981856499"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600"
                    >
                      (83) 9 8185-6499
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="text-primary-600 text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">E-mail</h3>
                    <a
                      href="mailto:contato@arservicosambientais.com.br"
                      className="text-gray-600 hover:text-primary-600"
                    >
                      contato@arservicosambientais.com.br
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaGlobe className="text-primary-600 text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Website</h3>
                    <a
                      href="https://www.arservicosambientais.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600"
                    >
                      www.arservicosambientais.com.br
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-primary-600 text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Endereço</h3>
                    <p className="text-gray-600">
                      Itaporanga, Paraíba
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Envie sua Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="orçamento">Solicitar Orçamento</option>
                    <option value="informações">Informações Gerais</option>
                    <option value="parceria">Proposta de Parceria</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center mb-12">
            Nossa Localização
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </section>
    </main>
  )
} 