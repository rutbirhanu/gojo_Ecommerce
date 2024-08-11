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
        <NavCatagoryContainer category="Women" imgSource="/dress.png" />
        <NavCatagoryContainer category="Men" imgSource="/t-shirt.png" />
        <NavCatagoryContainer category="Sport" imgSource="/balls-sports.png" />
        <NavCatagoryContainer category="Electronics" imgSource="/smartphone-call.png" />
        <NavCatagoryContainer category="Cosmetics" imgSource="/cosmetics.png" />
        <NavCatagoryContainer category="Toys" imgSource="/storage-box.png" />
      </div>
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <BrandContainer imgSource="https://lecoureurnordique.ca/cdn/shop/products/nike-zoom-fly-4-homme-le-coureur-nordique-33_700x700.jpg?v=1668773341"/>
      <BrandContainer imgSource= "https://www.shutterstock.com/image-photo/moscow-russia-october-07-2017-600nw-729667363.jpg"/>
      <BrandContainer imgSource= "https://img.freepik.com/premium-photo/isolated-sony-a7-iii-mirrorless-camera-front-view-white-backgroun-white-background-clean_655090-800284.jpg"/>
      <BrandContainer imgSource= "https://www.kickscrew.com/cdn/shop/products/main-square_761b9a58-6644-4d07-8c53-40c080413482_540x.jpg?v=1694121580"/>
      <BrandContainer imgSource= "https://sdcdn.io/mac/ca/mac_sku_SMXF28_1x1_0.png?width=1080&height=1080"/>

      <div className="category-card-container">
        <CategoryCard imgSource="https://i.mdel.net/oftheminute/images/2019/08/stas_55_04.jpg" category="Kids" desc="Blouse, Skirt, Mini Skirt and more" />
        <CategoryCard imgSource="https://www.essence.com/wp-content/uploads/2020/12/Fernando-Cabral-Mens-Health-UK-July-2019-by-Jon-Gorrigan.jpg" category="Men" desc="Blouse, Skirt, Mini Skirt and more" />
        <CategoryCard imgSource="https://ae01.alicdn.com/kf/S591bb2f59f8b4e0dbb879c2170241f87K.jpg_640x640q90.jpg" category="Women" desc="Blouse, Skirt, Mini Skirt and more" />
        <CategoryCard imgSource="https://i.pinimg.com/736x/b3/67/c8/b367c80640373452b88be9911b62ddad.jpg" category="Women" desc="Blouse, Skirt, Mini Skirt and more" />
        <CategoryCard imgSource="https://www.modelsdirectblog.com/wp-content/uploads/2020/11/shutterstock_1121333510.jpg" category="Women" desc="Blouse, Skirt, Mini Skirt and more" />
        <CategoryCard imgSource="https://www.rebelsport.com.au/on/demandware.static/-/Library-Sites-rebel-shared-library/default/dw4cc1588e/category/womens/cards/240329-XPLP-Womens-Footwear-Sneakers-Category-Heritage.jpg" category="Women" desc="Blouse, Skirt, Mini Skirt and more" />
        <CategoryCard imgSource="https://accessorizelondon.in/cdn/shop/files/MA-28187004001_1_8a091db7-0510-47d6-8eff-f95c927c4dd6.webp?crop=center&height=720&v=1697534229&width=720" category="Women" desc="Blouse, Skirt, Mini Skirt and more" />
        <CategoryCard imgSource="https://publish.purewow.net/wp-content/uploads/sites/2/2022/03/The-Learning-Journey-Match-It-Self-Correcting-Spelling-Puzzles-Ages-2-to-5-TOP-Educational-Toys.jpg?resize=260%2C260" category="Women" desc="Blouse, Skirt, Mini Skirt and more" />
      </div>
    </div>
  )
}

export default HomePage