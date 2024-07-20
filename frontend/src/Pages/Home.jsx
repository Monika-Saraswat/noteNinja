import React from 'react'
import LogOutBtn from '../Components/LogOutBtn.jsx'
import AllNotes from '../Components/AllNotes.jsx'

const Home = () => {
  return (
    <div className='flex h-screen w-screen rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 shadow-md align-middle items-center'>
      <AllNotes/>
      <LogOutBtn/>
    </div>
  )
}

export default Home