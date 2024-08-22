import { useNavigate } from "react-router-dom"
import "./components.css"

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <div className="left-side-nav">
        <img src="/gojo_logo.png" alt="logo"  height="42px"/>
        <div className="search-container">
          <input type="text" />
          <img src="/search-logo.png" alt="search" height="17px"/>
        </div>
      </div>
      <div className="right-side-nav">
        <p>Download app</p>
        <p onClick={()=>navigate("/sign-up")}>Sign up</p>
        <p onClick={()=>navigate("/login")}>Login</p>
        <p> || </p>
        <img src="/cart.png" alt="cart" height="33px" />
      </div>
    </div>
  )
}

export default NavBar