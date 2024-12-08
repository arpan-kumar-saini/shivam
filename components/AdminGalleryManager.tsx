'use client'

import React, { useState } from 'react'
import { Plus, X, Loader2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { FileUpload } from './FileUpload'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image';

interface GalleryItem {
  id: number
  title: string
  image: string
  category: string
}

export default function AdminGalleryManager() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([
    { id: 1, title: "Fresher Welcome Party", image: "/images/arpan2.jpg", category: "Fresher Party" },
    { id: 2, title: "Orientation Day", image: "/images/banner.jpg", category: "Induction Program" },
  ])

  const [newItem, setNewItem] = useState<GalleryItem & { file?: File }>({
    id: 0,
    title: '',
    image: '',
    category: ''
  })

  const [isUploading, setIsUploading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewItem(prev => ({ ...prev, [name]: value }))
  }

  const handleFileSelect = (file: File) => {
    setNewItem(prev => ({ ...prev, file, image: URL.createObjectURL(file) }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (newItem.title && newItem.file && newItem.category) {
      setIsUploading(true)
      // Simulating file upload delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      setGalleryItems(prev => [...prev, { ...newItem, id: prev.length + 1, image: URL.createObjectURL(newItem.file!) }])
      setNewItem({ id: 0, title: '', image: '', category: '' })
      setIsUploading(false)
    }
  }

  const handleDelete = (id: number) => {
    setGalleryItems(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="m-8 md:m-24 mx-auto">
        <Card className="backdrop-blur-md bg-white/30 shadow-xl rounded-2xl overflow-hidden">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Gallery Manager</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={newItem.title}
                    onChange={handleInputChange}
                    required
                    className="bg-white/50"
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    name="category"
                    value={newItem.category}
                    onChange={handleInputChange}
                    required
                    className="bg-white/50"
                  />
                </div>
              </div>
              <div>
                <Label>Image Upload</Label>
                <FileUpload onFileSelect={handleFileSelect} />
                {newItem.image && (
                  <div className="mt-2">
                  <Image 
                    src={newItem.image} 
                    alt="Preview" 
                    className="rounded" 
                    width={500} 
                    height={200} 
                    layout="responsive"
                  />
                  </div>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={isUploading}>
                {isUploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Plus className="mr-2 h-4 w-4" /> Add New Image
                  </>
                )}
              </Button>
            </form>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Current Gallery Items</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AnimatePresence>
                  {galleryItems.map(item => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="overflow-hidden bg-white/40 backdrop-blur-sm">
                        <CardContent className="p-4">
                          <div className="relative aspect-video mb-2">
                          <Image 
                            src={item.image} 
                            alt={item.title} 
                            className="rounded object-cover" 
                            width={500} 
                            height={500} 
                            layout="responsive" 
                          />
                          </div>
                          <h4 className="font-semibold text-gray-800">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.category}</p>
                          <Button
                            variant="destructive"
                            size="sm"
                            className="mt-2"
                            onClick={() => handleDelete(item.id)}
                          >
                            <X className="mr-2 h-4 w-4" /> Remove
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

