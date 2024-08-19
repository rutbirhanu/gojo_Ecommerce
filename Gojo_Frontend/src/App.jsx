import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/homePage";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
function App() {

  return (
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route path="/product-detail/:id" element={<DetailsPage/>} />
      <Route path="/sign-up" element={<SignUp/>} />
      <Route path="/login" element={<LogIn/>} />
    </Routes>
  )
}

export default App
