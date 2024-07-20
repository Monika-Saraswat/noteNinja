import React from 'react'
import LogOutBtn from '../Components/LogOutBtn.jsx'
import AllNotes from '../Components/AllNotes.jsx'
import Navbar from '../Components/Navbar.jsx'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 shadow-md flex-col'>
      <Navbar/>
      <AllNotes/>
    </div>
  )
}

export default Home