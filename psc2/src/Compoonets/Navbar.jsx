import { Link } from "react-router-dom";

import React from 'react'

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home </Link>
      <Link to="/login">Login </Link>
      <Link to="/users">Users</Link>
    </div>
  )
}

export default Navbar
