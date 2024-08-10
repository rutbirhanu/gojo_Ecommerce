import BrandContainer from "../components/BrandContainer"
import CarouselComp from "../components/CarouselComp"
import CategoryCard from "../components/CategoryCard"
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
      <BrandContainer />
      <div className="category-card-container">
      <CategoryCard imgSource="https://i.mdel.net/oftheminute/images/2019/08/stas_55_04.jpg" category="Kids" desc="Blouse, Skirt, Mini Skirt and more"/>
      <CategoryCard imgSource="https://www.essence.com/wp-content/uploads/2020/12/Fernando-Cabral-Mens-Health-UK-July-2019-by-Jon-Gorrigan.jpg" category="Men" desc="Blouse, Skirt, Mini Skirt and more"/>
        <CategoryCard imgSource="https://perthisok.com/thumbnails/cG9zdDoxMDUzOTY=.jpeg" category="Women" desc="Blouse, Skirt, Mini Skirt and more" />
        <CategoryCard imgSource="https://i.pinimg.com/736x/b3/67/c8/b367c80640373452b88be9911b62ddad.jpg" category="Women" desc="Blouse, Skirt, Mini Skirt and more" />
        </div>
    </div>
  )
}

export default HomePage