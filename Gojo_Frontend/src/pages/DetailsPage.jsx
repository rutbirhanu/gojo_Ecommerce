import './pages.css'
import TitleComponent from '../components/TitleComponent'
import ItemCard from "../components/ItemCard"
import ButtonComponent from '../components/ButtonComponent'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import SnackBar from '../components/snackBarComponent.jsx'
import { addToCart } from '../redux/cartSlice.js'


function DetailsPage() {
  const { id } = useParams()
  const dispatch= useDispatch()
  const { products } = useSelector(state => state.product)
  const [product, setProduct] = useState({})

  useEffect(() => {
    const selectedProduct = products.find(product => (product.id === id))
    setProduct(selectedProduct)

  }, [id])

  const [showSnackBar, setShowSnackBar] = useState(false)
  const handleCloseSnackBar = () => {
    setShowSnackBar(false);
  };
  const similarProducts = products.filter(item => item.category === product.category)

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
            
              {
                showSnackBar && <SnackBar visible={showSnackBar} onClose={handleCloseSnackBar} />}
            </div>
            <ButtonComponent desc="Add to cart" onclick={() => {
              setShowSnackBar(true)
              dispatch(addToCart(product))
            }} />

          </div>
        </div>
        <br />
        <br />
        <TitleComponent title="More From This Category" />
        <div className="similar-items">
          {
            similarProducts
              .filter(item => item.id !== id) // Exclude the selected item
              .map(item => (
                // <Link to={`/details/${item.id}`} key={item.id}>
                  <ItemCard id={item.id} key={item.id} name={item.name} image={item.image} price={item.price} />
                // </Link>
              ))
          }
        </div>
        <Footer />
      </div>
    </>
  )
}

export default DetailsPage