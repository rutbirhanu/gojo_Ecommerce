import BrandContainer from "../components/BrandContainer"
import CarouselComp from "../components/CarouselComp"
import ItemCard from "../components/ItemCard"
import NavCatagoryContainer from "../components/NavCatagoryContainer"
import "./pages.css"

function HomePage() {
  return (
      <div>
      <CarouselComp />
      <div className="categories-container">
          <NavCatagoryContainer category="Women" imgSource="../../public/dress.png" />
          <NavCatagoryContainer category="Men" imgSource="../../public/t-shirt.png" />
          <NavCatagoryContainer category="Sport" imgSource="../../public/balls-sports.png" />
          <NavCatagoryContainer category="Electronics" imgSource="../../public/smartphone-call.png" />
          <NavCatagoryContainer category="Cosmetics" imgSource="../../public/cosmetics.png" />
        <NavCatagoryContainer category="Toys" imgSource="../../public/storage-box.png" />
      </div>
      <ItemCard />
      <BrandContainer/>
    </div>
  )
}

export default HomePage