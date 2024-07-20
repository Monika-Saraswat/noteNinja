import React from 'react'

const Note = () => {
  return (
    <div className="card bg-warning text-primary-content w-96">
        <div className="card-body">
            <h2 className="card-title">Note</h2>
            <p>Nore desc</p>
            <h3>Author:</h3>
            <h4>Last updated by:</h4>
        </div>
    </div>
  )
}

export default Note