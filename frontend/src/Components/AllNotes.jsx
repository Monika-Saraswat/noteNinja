import React from 'react'
import Note from './Note'

const AllNotes = () => {
  return (
    <div className='grid gap-1 overflow-auto'>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
    </div>
  )
}

export default AllNotes