/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import "./components.css"

function ItemCard({name, image, price}) {
  return (
    <div>
      <Card style={{ width: '15rem', margin:"1em 2em" }}>
      <Card.Img variant="top" src={image} height="150px" />
      <Card.Body style={{ height: '5rem' }}>
        <Card.Text>
          {name}
          </Card.Text>
          <Card.Text>${price}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ItemCard