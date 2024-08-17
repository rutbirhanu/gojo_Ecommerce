import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage"
import DetailsPage from "./pages/DetailsPage";
function App() {

  return (
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      {/* <Route exact path="/" element={<DetailsPage/>} /> */}
      <Route path="/product-detail/:id" element={<DetailsPage/>} />
    </Routes>
  )
}

export default App
