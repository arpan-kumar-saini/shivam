'use client'

import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function FooterComponent() {
  return (
    <footer className="pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 bg-white rounded-3xl opacity-10 blur-xl"></div>
          <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-lg border border-white border-opacity-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-purple-800">Cultural Club</h3>
                <p className="text-gray-600">Celebrating diversity through art, music, and dance.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-purple-800">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/home" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">Home</a></li>
                  <li><a href="/events" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">Events</a></li>
                  <li><a href="/gallery" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">Gallery</a></li>
                  <li><a href="/about-us" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">About Us</a></li>
                  <li><a href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">Contact</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-purple-800">Contact Us</h4>
                <div className="space-y-2">
                  <p className="text-gray-600 flex items-center">
                    <MapPin className="h-10 w-10 md:h-20 md:w-20 mr-2 text-purple-600" />
                    Rajkiya Engineering College Bijnor Near Eidgah, Dattyana Road, Jaleelpur Road, Chandpur (Bijnor) Uttar Pradesh - 246725
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-purple-600" />
                    cultural@recb.ac.in
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-purple-600" />
                    +91 9817744166 (Convener)
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-purple-800">Follow Us</h4>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: Facebook, href: 'https://facebook.com', color: 'text-blue-600', label: 'Facebook' },
                    { icon: Instagram, href: 'https://instagram.com', color: 'text-pink-600', label: 'Instagram' },
                    { icon: Youtube, href: 'https://youtube.com', color: 'text-red-600', label: 'YouTube' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`${social.color} hover:opacity-75 transition-opacity duration-300`}
                      aria-label={`Follow us on ${social.label}`}
                    >
                      <social.icon className="h-8 w-8 sm:h-6 sm:w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Cultural Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
