import React from 'react'

const Navbar = () => {
  return (
    <nav>
      {/* Logo */}
      
      <ul className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Navbar</a>
      {/* Links */}
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">Active</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul></nav>
  )
}

export default Navbar