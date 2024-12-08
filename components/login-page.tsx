"use client"

import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 w-12 h-12 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute right-1/4 top-1/3 w-16 h-16 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute left-1/3 bottom-1/3 w-14 h-14 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="w-full max-w-md">
        <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden border border-gray-100 border-opacity-20">
          <div className="px-8 pt-8 pb-6">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Welcome Back!</h2>
            <p className="text-center text-gray-600 mb-8">Please log in to your account.</p>
            <form>
              <div className="space-y-6">
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 bg-opacity-30 border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-gray-800 transition duration-200"
                  />
                </div>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 bg-opacity-30 border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-gray-800 transition duration-200"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
                  </button>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition duration-200 transform hover:scale-105">
                  Log In
                </Button>
              </div>
            </form>
          </div>

        </div>
     
      </div>
    </div>
  )
}

