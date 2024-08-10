import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/homePage"
function App() {

  return (
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
    </Routes>
  )
}

export default App
