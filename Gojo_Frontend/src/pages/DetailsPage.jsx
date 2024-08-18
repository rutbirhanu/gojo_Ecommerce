import './pages.css'
import TitleComponent from '../components/TitleComponent'
import ItemCard from "../components/ItemCard"
import ButtonComponent from '../components/ButtonComponent'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


function DetailsPage() {
  const { id } = useParams()
  const { products } = useSelector(state => state.product)
  const [product, setProduct] = useState({})

  useEffect(() => {
    const selectedProduct = products.find(product => (product.id === id))
    setProduct(selectedProduct)

  }, [id])
  const similarProducts = products.filter(item => item.category === product.category)
  console.log("hi")
  console.log(products.category)
  console.log("pip")
  console.log(product.category)
  console.log(similarProducts)

  return (
    <>
      <NavBar />
      <div className="details-parent-container">
        <div className='details-page-container'>
          <div className="details-left-side">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="details-right-side">
            <h3>{product.name}</h3>
            <h3>${product.price}</h3>
            <div className="item-details">
              <h4>Details</h4>
              <div className="detail">
                <span>Condition</span>
                <span>Good</span>
              </div>
              <div className="detail">
                <span>Brand</span>
                <span>{product.brand}</span>
              </div>
              <div className="detail">
                <span>Category</span>
                <span>{product.category}</span>
              </div>
              <div className="detail">
                <span>Tops & Blouses</span>
                <span>Blouse</span>
              </div>
            </div>
            <ButtonComponent desc="Add to cart" />

          </div>
        </div>
        <br />
        <br />
        <TitleComponent title="More From This Category" />
        <div className="similar-items">
          {
            similarProducts.map(item => (
              <ItemCard key={item.id} name={item.name} image={item.image} price={item.price} />
            ))
          }
        </div>
        <Footer />
      </div>
    </>
  )
}

export default DetailsPage