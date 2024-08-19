import "./components.css"

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="left-side-nav">
        <img src="/gojo_logo.png" alt="logo"  height="45px"/>
        <div className="search-container">
          <input type="text" />
          <img src="/search-logo.png" alt="search" height="17px"/>
        </div>
      </div>
      <div className="right-side-nav">
        <p>Download app</p>
        <p>Sign up</p>
        <p>login</p>
        <p> || </p>
        <img src="/cart.png" alt="cart" height="33px" />
      </div>
    </div>
  )
}

export default NavBar