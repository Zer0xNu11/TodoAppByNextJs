import React from 'react'
import NavList from './SideMenu/NavList/NavList'

const SideMenu = () => {
  return (
    <div className='w-56 pt-8 bg-gray-800 text-white'>
      <div>
        <h1 className='px-4 text-2xl font-bold'>Next Tasks</h1>
        <NavList/>
      </div>
    </div>
  )
}

export default SideMenu