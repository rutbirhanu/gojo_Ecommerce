import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
// import HomePage from "./pages/homePage"
import DetailsPage from "./pages/DetailsPage";
function App() {

  return (
    <Routes>
      {/* <Route exact path="/" element={<HomePage/>} /> */}
      <Route exact path="/" element={<DetailsPage/>} />
    </Routes>
  )
}

export default App
