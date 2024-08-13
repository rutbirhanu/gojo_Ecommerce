import Carousel from 'react-bootstrap/Carousel';

function CarouselComp() {
  return (
      <div>
          <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ithinkbigger.com/wp-content/uploads/2022/03/eCommerce-Website-Components-photo-1024x375.jpg"
            alt="First slide"
            height="230px"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.vexels.com/media/users/3/194700/raw/aa5b7c80ff2c80f764e2cabf5492a701-buy-online-slider-template.jpg"
            alt="Second slide"
             height="230px"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../public/banner3.jpg"
            alt="Third slide"
             height="230px"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../public/banner4.jpg"
            alt="Third slide"
             height="230px"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_640.jpg"
            alt="Fifth slide"
            height="230px"
            style={{ objectFit: "cover"}}
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselComp