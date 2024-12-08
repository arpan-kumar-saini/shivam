'use client'

import React, { useState } from 'react'
import { Plus, Edit2, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from 'next/image'
import teamMembersData from '@/data/team-members/teamMembers.json';

interface Member {
  id: string
  name: string
  rollNo: string
  branchYear: string
  responsibilities: string
  image: string
}

const initialMembers: Member[] = teamMembersData

export default function ClubMemberManagement() {
  const [members, setMembers] = useState<Member[]>(initialMembers)
  const [newMember, setNewMember] = useState<Omit<Member, 'id'>>({
    name: '',
    rollNo: '',
    branchYear: '',
    responsibilities: '',
    image: ''
  })
  const [editingMember, setEditingMember] = useState<Member | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (editingMember) {
      setEditingMember({ ...editingMember, [name]: value })
    } else {
      setNewMember({ ...newMember, [name]: value })
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (editingMember) {
          setEditingMember({ ...editingMember, image: reader.result as string })
        } else {
          setNewMember({ ...newMember, image: reader.result as string })
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingMember) {
      setMembers(members.map(m => m.id === editingMember.id ? editingMember : m))
      setEditingMember(null)
    } else {
      const id = Date.now().toString()
      setMembers([...members, { id, ...newMember }])
      setNewMember({
        name: '',
        rollNo: '',
        branchYear: '',
        responsibilities: '',
        image: ''
      })
    }
    setIsDialogOpen(false)
  }

  const handleEdit = (member: Member) => {
    setEditingMember(member)
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    setMembers(members.filter(m => m.id !== id))
  }

  return (
    <div className="p-6 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 min-h-screen">
      <Card className=" mx-4 md:mx-24  backdrop-blur-lg bg-white/30 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Club Member Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="mb-4">
                <Plus className="mr-2 h-4 w-4" /> Add New Member
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{editingMember ? 'Edit Member' : 'Add New Member'}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={editingMember ? editingMember.name : newMember.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="rollNo">Roll No / Position</Label>
                  <Input
                    id="rollNo"
                    name="rollNo"
                    value={editingMember ? editingMember.rollNo : newMember.rollNo}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="branchYear">Branch & Year</Label>
                  <Input
                    id="branchYear"
                    name="branchYear"
                    value={editingMember ? editingMember.branchYear : newMember.branchYear}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="responsibilities">Responsibilities</Label>
                  <Input
                    id="responsibilities"
                    name="responsibilities"
                    value={editingMember ? editingMember.responsibilities : newMember.responsibilities}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="image">Image</Label>
                  <Input
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    required={!editingMember}
                  />
                </div>
                <Button type="submit">{editingMember ? 'Update' : 'Add'} Member</Button>
              </form>
            </DialogContent>
          </Dialog>

          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-4">
              {members.map((member) => (
                <Card key={member.id} className="p-4 backdrop-blur-sm bg-white/20">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.rollNo}</p>
                      <p className="text-sm text-gray-600">{member.branchYear}</p>
                      <p className="text-sm text-gray-600">{member.responsibilities}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon" onClick={() => handleEdit(member)}>
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => handleDelete(member.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}

