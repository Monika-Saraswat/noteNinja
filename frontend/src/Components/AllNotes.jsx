import React from 'react'
import Note from './Note'

const AllNotes = () => {
  return (
    <div className='grid gap-1 overflow-auto grid-flow-col'>
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