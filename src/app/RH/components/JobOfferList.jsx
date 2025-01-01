import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/Table'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'


export default function JobOfferList({ jobOffers, onUpdateOffer, onDeleteOffer }) {
  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState({})

  const handleEdit = (offer) => {
    setEditingId(offer.id)
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
          <TableHead>Department</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jobOffers.map((offer) => (
          <TableRow key={offer.id}>
            <TableCell>
              {editingId === offer.id ? (
                <Input 
                  name="title"
                  value={editForm.title} 
                  onChange={handleChange}
                  className='bg-white'
                />
              ) : offer.title}
            </TableCell>
            <TableCell>
              {editingId === offer.id ? (
                <Input 
                  name="department"
                  value={editForm.department} 
                  onChange={handleChange}
                  className='bg-white'
                />
              ) : offer.department}
            </TableCell>
            <TableCell>
              {editingId === offer.id ? (
                <Button onClick={handleSave}>Save</Button>
              ) : (
                <>
                  <Button onClick={() => handleEdit(offer)} className="mr-2">Edit</Button>
                  <Button onClick={() => onDeleteOffer(offer.id)} variant="destructive">Delete</Button>
                </>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

