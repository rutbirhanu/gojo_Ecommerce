/* eslint-disable react/prop-types */
import "./components.css"
function BrandContainer({imgSource}) {
  return (
      <div className='brand-container'>
          <img src={imgSource} height="93px" width="93px"/>
    </div>
  )
}

export default BrandContainer