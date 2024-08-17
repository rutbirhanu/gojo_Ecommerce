import './pages.css'
import TitleComponent from '../components/TitleComponent'
import ItemCard from "../components/ItemCard"
import ButtonComponent from '../components/ButtonComponent'


function DetailsPage() {
    return (
      <div className="details-parent-container">
             <div className='details-page-container'>
          <div className="details-left-side">
              <img src="/gallery-1.jpg" alt="apple watch "/>
          </div>

          <div className="details-right-side">
              <h3>8 Topshop Brown Plant Print Top</h3>
            <h3>$12.00</h3>
                    <div className="item-details">
                        <h4>Details</h4>
                       <div className="detail">
                        <span>Condition</span>
                        <span>Good</span>
                    </div>
                    <div className="detail">
                        <span>Brand</span>
                        <span>TopShop</span>
                    </div>
                    <div className="detail">
                        <span>Category</span>
                        <span>Women</span>
                    </div>
                    <div className="detail">
                        <span>Tops & Blouses</span>
                        <span>Blouse</span>
                    </div>
            </div>
            <ButtonComponent desc="Add to cart"/>
            
          </div>
            </div>
            <br/>
            <br/>
            <div className="similar-items">
              <TitleComponent title="More From This Category" />
              <ItemCard name="apple watch" image="/gallery-1.jpg" price="200" />
          </div>
      </div>
  )
}

export default DetailsPage