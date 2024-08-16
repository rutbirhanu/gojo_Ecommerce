/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./components.css"

function ItemCard({name, image, price}) {
  return (
    <div className='item-card-parent-container'>
      <div className="item-card-image">
        <img src={image} alt="apple watch"/>
      </div>
      <div className="item-description">
        <p>{name}</p>
        <h6>${price}</h6>
      </div>
    </div>
  )
}

export default ItemCard

  {/* <Card style={{ width: '15rem', margin:"1em 2em" }}>
      <Card.Img variant="top" src={image} height="150px" />
      <Card.Body style={{ height: '5rem' }}>
        <Card.Text>
          {name}
          </Card.Text>
          <Card.Text>${price}</Card.Text>
      </Card.Body>
    </Card> */}