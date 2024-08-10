import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/homePage"
function App() {

  return (
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
    </Routes>
  )
}

export default App
