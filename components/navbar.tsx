'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Our Team', href: '/team' },
  { name: 'Contact Us', href: '/contact' },
  // { name: 'Downloads', href: '/downloads' },
]

export default function NavbarComponent() {
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => setIsMounted(true), [])

  if (!isMounted) return null

  return (
    <nav className="bg-white shadow-md bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Cultural Club logo"
                width={50}
                height={50}
                className="h-14 w-12"
              />
              <span className="ml-2 text-2xl font-extrabold tracking-tight text-black">
                Cultural Club
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:justify-center flex-1 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === item.href
                    ? 'text-black bg-gradient-to-br from-green-100 via-blue-100 to-purple-100'
                    : 'text-gray-700 hover:text-black hover:bg-gradient-to-br from-green-100 via-blue-100 to-purple-100'
                } transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-black">
                  <span className="sr-only">Open menu</span>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-8">
                    <Link href="/" className="flex items-center">
                      <Image
                        src="/images/logo.png"
                        alt="Cultural Club logo"
                        width={60}
                        height={50}
                        className="h-12 w-14"
                      />
                      <span className="ml-2 text-xl font-bold text-black">
                        Cultural Club
                      </span>
                    </Link>
                  </div>
                  <div className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`px-3 py-2 rounded-md text-base font-medium ${
                          pathname === item.href
                            ? 'text-black bg-gradient-to-br from-green-100 via-blue-100 to-purple-100'
                            : 'text-gray-700 hover:text-black hover:bg-gradient-to-br from-green-100 via-blue-100 to-purple-100'
                        } transition-colors duration-200`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
