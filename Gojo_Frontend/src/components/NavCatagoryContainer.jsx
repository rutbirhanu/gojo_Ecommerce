/* eslint-disable react/prop-types */
import "./components.css"

function NavCatagoryContainer({imgSource, category}) {
  return (
      <div className="nav-catagory-container">
          <img src={imgSource} height="25px" />
          <small>{category}</small>
    </div>
  )
}



export default NavCatagoryContainer