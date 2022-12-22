import { Route, Routes } from "react-router-dom"
import Home from './Home'
import Login from './Login'
import ButtonAppBar from './Navbar'
import TaxAssessment from './TaxAssessment'
import WebMap from './WebMap'



function App() {
  return (
    <>
    <ButtonAppBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/web-map" element={<WebMap />} />
      <Route path="/tax-assessment" element={<TaxAssessment />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>

  )
}

export default App
