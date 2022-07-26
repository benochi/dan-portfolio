import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <nav>
      <div classname="links" >
        <Link class="pt-2 text-xl" to="/">Home</Link>
        <Link class="pt-2 text-xl" to="/about">About</Link>
        <Link class="pt-2 text-xl" to="/certificates">Certificates</Link>
        <Link class="pt-2 text-xl" to="/cv">CV</Link>
      </div>
    </nav>
  )
}
