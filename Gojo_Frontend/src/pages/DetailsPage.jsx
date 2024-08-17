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
  const [product, setProduct] = useState()
  
  useEffect(() => {
    console.log(id)
    console.log(typeof(id))

    const selectedProduct = products.find(product => (product.id === id))
    setProduct(selectedProduct)
    console.log(product)

  }, [id])
  console.log(product)

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
            <h3>{product.price}</h3>
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
        <div className="similar-items">
          <TitleComponent title="More From This Category" />
          <ItemCard name="apple watch" image="/gallery-1.jpg" price="200" />
        </div>
        <Footer />
      </div>
  </>
  )
}

export default DetailsPage