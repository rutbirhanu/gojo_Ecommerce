/* eslint-disable react/prop-types */
import "./components.css"

function CategoryCard({desc, category, imgSource}) {
  return (
      <div className="category-card">
          <div className='category-card-overlay'>
              <p>{ desc}</p>
              <h5>{category}</h5>
          </div>
          <img src={imgSource} />
    </div>
  )
}

export default CategoryCard