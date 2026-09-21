import './navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>

      <ul className="nav-links">
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="login-btn">Login</button>
    </nav>
  )
}

export default Navbar