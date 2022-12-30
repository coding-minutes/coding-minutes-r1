import React from 'react'

import { Navbar, Advertisement } from '../../components'
import './navContainer.css'

const NavContainer = () => {
  return (
    <div className="fixed-nav">
      {/* <Advertisement /> */}
      <Navbar />
    </div>
  )
}

export default NavContainer