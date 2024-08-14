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
          src="https://i0.wp.com/nlindia.com/wp-content/uploads/2021/05/ecommerce-website-like-amazon-banner.jpg"
            alt="Third slide"
             height="230px"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.shutterstock.com/image-vector/ecommerce-website-banner-template-presents-260nw-2252124451.jpg"
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