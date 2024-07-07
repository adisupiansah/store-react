import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigasi from "../web/Navigasi"
import Home from "../web/Home"
import Product from "../web/Product"
const MyWeb = () => {
  return (
    <div>
      <Navigasi />
      <Home />
      <Product />
    </div>
  )
}

export default MyWeb
