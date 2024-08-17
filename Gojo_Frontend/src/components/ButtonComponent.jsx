/* eslint-disable react/prop-types */
import "./components.css"


function ButtonComponent({desc}) {
  return (
      <div className="button-container">
          <button>{desc}</button>
    </div>
  )
}

export default ButtonComponent