import { useNavigate } from "react-router-dom"
import "./components.css"
import {  useSelector } from "react-redux"
import { useEffect, useState } from "react";

function NavBar() {
  const [userLocation, setUserLocation] = useState("");
  useEffect(() => {
    const location = localStorage.getItem("userLocation");
    setUserLocation(location); 
  }, [])
  
  const navigate = useNavigate();
  const {user} = useSelector(state=>state.auth)
  return (
    <div className="navbar-container">
      <div className="left-side-nav">
        <img src="/gojo_logo.png" alt="logo"  height="42px"/>
        <div className="search-container">
          <input type="text" placeholder="search here"/>
          <img src="/search-logo.png" alt="search" height="17px"/>
        </div>
      </div>
      <p style={{ fontStyle: "italic", fontSize: "14px", margin: 0 }} onClick={() => console.log(user)}>{userLocation }</p>

      <div className="right-side-nav">
        <p>Download app</p>
        <p onClick={()=>navigate("/sign-up")}>Sign up</p>
        <p onClick={()=>navigate("/login")}>Login</p>
        <img src="/cart.png" alt="cart" height="33px" onClick={()=>navigate("/cart")} />
      </div>
    </div>
  )
}

export default NavBar