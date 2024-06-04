import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home"
import SingleProduct from "./components/SingleProduct/SingleProduct"
import Header from "./components/Header/Header";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import AppContext from "./utils/Context";
import CategorySecond from "./components/Category/CategorySecond";

const App = () => {
  return (

    <BrowserRouter>
    <AppContext>

      <Header />
        <Routes>
          <Route  path="/" element={<Home />}/>
          <Route  path="/category/:id" element={<CategorySecond />}/>
          <Route  path="/product/:id" element={<SingleProduct />}/>
        </Routes>
      <Newsletter />
      <Footer />
      
    </AppContext>
    </BrowserRouter>
  )
}

export default App;