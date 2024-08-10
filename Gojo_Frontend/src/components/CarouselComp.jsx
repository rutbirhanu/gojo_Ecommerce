import Carousel from 'react-bootstrap/Carousel';

function CarouselComp() {
  return (
      <div>
          <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="https://previews.123rf.com/images/pondshutter/pondshutter2107/pondshutter210700269/172372926-cosmetics-or-skin-care-product-ads-with-bottle-banner-ad-for-beauty-products-brown-and-leaf.jpg"
            alt="First slide"
            height="130px"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="../../public/banner2.jpg"
            alt="Second slide"
             height="200px"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="../../public/banner3.jpg"
            alt="Third slide"
             height="200px"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="../../public/banner4.jpg"
            alt="Third slide"
              height="200px"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="../../public/banner5.webp"
            alt="Fifth slide"
            height="200px"
            style={{ objectFit: "cover"}}
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselComp