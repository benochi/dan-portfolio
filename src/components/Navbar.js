import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <nav>
      <div classname="links" >
        <Link class="pt-2" to="/">Home</Link>
        <Link class="pt-2" to="/about">About</Link>
        <Link class="pt-2" to="/certificates">Certificates</Link>
        <Link class="pt-2" to="/cv">CV</Link>
      </div>
    </nav>
  )
}
