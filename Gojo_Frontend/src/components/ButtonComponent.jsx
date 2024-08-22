/* eslint-disable react/prop-types */
import "./components.css"


function ButtonComponent({desc, onclick}) {
  return (
      <div className="button-container">
          <button onClick={onclick}>{desc}</button>
    </div>
  )
}

export default ButtonComponent