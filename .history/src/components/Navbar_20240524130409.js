import React from 'react'

const Navbar = () => {
  return (
    <div>
      {/* Logo */}
      <a className="navbar-brand" href="/">Navbar</a>
      {/* Links */}
      <ul className="nav">
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
    </ul></div>
  )
}

export default Navbar