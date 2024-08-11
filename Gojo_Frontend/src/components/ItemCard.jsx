import Card from 'react-bootstrap/Card';

function ItemCard() {
  return (
    <div>
  <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="../../public/banner5.webp" height="150px" />
      <Card.Body style={{ height: '5rem' }}>
        <Card.Text>
          Some quick example text to 
          </Card.Text>
          <Card.Text>$48</Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ItemCard