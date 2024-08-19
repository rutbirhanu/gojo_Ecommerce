import "./components.css"

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="left-side-nav">
        <h3>Gojo</h3>
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