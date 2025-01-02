'use client'

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/Table'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'


export default function JobOfferList({ offers = [], onUpdateOffer, onDeleteOffer }) {
    const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState({})

  const handleEdit = (offer) => {
    setEditingId(offer._id)
    setEditForm(offer)
  }

  const handleSave = () => {
    onUpdateOffer(editForm)
    setEditingId(null)
  }

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value })
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>description</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {offers.map((offer) => (
          <TableRow key={offer._id}>
            <TableCell>
              {editingId === offer._id ? (
                <Input 
                  name="title"
                  value={editForm.title} 
                  onChange={handleChange}
                  className='bg-white'
                />
              ) : offer.title}
            </TableCell>
            <TableCell>
              {editingId === offer._id ? (
                <Input 
                  name="description"
                  value={editForm.description} 
                  onChange={handleChange}
                  className='bg-white'
                />
              ) : offer.description}
            </TableCell>
             <TableCell>
              {editingId === offer.id ? (
                <Button onClick={handleSave}>Save</Button>
              ) : (
                <>
                  <Button onClick={() => handleEdit(offer)} className="mr-2">Edit</Button>
                  <Button onClick={() => onDeleteOffer(offer._id)} variant="destructive">Delete</Button>
                </>
              )}
            </TableCell> 
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

