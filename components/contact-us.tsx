'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export  default function ContactUs() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setSubmitMessage('Thank you for your message. We\'ll get back to you soon!')
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen p-4 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="relative group">
          <div className="absolute inset-0  rounded-3xl transition-all duration-300 group-hover:blur-sm"></div>
          <div className="relative  bg-opacity-10 backdrop-filter backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-300 group-hover:translate-y-[-10px] group-hover:shadow-xl border border-white border-opacity-20">
            <h2 className="text-3xl font-bold mb-6 text-indigo-900">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm transition-all duration-300 hover:bg-opacity-70"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm transition-all duration-300 hover:bg-opacity-70"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm transition-all duration-300 hover:bg-opacity-70"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 flex items-center justify-center"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>
            {submitMessage && (
              <p className="mt-4 text-green-600 text-center" aria-live="polite">{submitMessage}</p>
            )}
          </div>
        </div>

        {/* Contact Details */}
        <div className="relative group">
          <div className="absolute inset-0  rounded-3xl transition-all duration-300 group-hover:blur-sm"></div>
          <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-300 group-hover:translate-y-[-10px] group-hover:shadow-xl border border-white border-opacity-20">
            <h2 className="text-3xl font-bold mb-6 text-indigo-900">Contact Details</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 group cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-20 p-2 rounded-lg">
                <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">contact@culturalclub.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-20 p-2 rounded-lg">
                <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-colors duration-300">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+1 (123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-20 p-2 rounded-lg">
                <div className="bg-purple-100 p-3 rounded-full group-hover:bg-purple-200 transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">123 Cultural Street, Artsville, AC 12345</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Find Us</h3>
              <div className="relative h-64 rounded-lg overflow-hidden group">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1747.3035110576295!2d78.24662596282725!3d29.132421675297177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b96ff929daa1b%3A0x6f84c5006226847c!2sRajkiya%20Engineering%20College%20Bijnor!5e1!3m2!1sen!2sin!4v1730569604485!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}