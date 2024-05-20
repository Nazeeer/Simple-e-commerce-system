import Footer from "./components/Uitily/Footer";
import NavBarLogin from "./components/Uitily/NavBarLogin";
import HomePage from "./page/Home/HomePage";
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import LoginPage from "./page/Auth/LoginPage";
import RegisterPage from "./page/Auth/RegisterPage";
import AllCategoryPage from "./page/Category/AllCategoryPage";
import AllBrandPage from "./page/Brand/AllBrandPage";
import ShopProductPage from "./page/Product/ShopProductPage";

function App() {
  return (
    <div className="font">
      <NavBarLogin/>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="register" element={<RegisterPage/>}/>
        <Route path="allcategory" element={<AllCategoryPage/>}/>
        <Route path="allbrand" element={<AllBrandPage/>}/>
        <Route path="allproduct" element={<ShopProductPage/>}/>
      </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
