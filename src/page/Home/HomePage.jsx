import React from 'react'
// import NavBarLogin from '../../components/Uitily/NavBarLogin'
import Slider from '../../components/Home/Slider'
import HomeCategory from '../../components/Home/HomeCategory'
import CardProductContainer from '../../components/products/CardProductContainer'
import DiscountComponent from '../../components/Home/DiscountComponent'
import BrandFeature from '../../components/Brand/BrandFeature'
// import Footer from '../../components/Uitily/Footer'



const HomePage = () => {
  return (
    <div  style={{minHeight:'670px'}}>
        {/* <NavBarLogin/> */}
        <Slider/>
        <HomeCategory/>
        <CardProductContainer mainTitle={'Best Seller'} btnTitle={'More'} path={'/allproduct'}/>
        <DiscountComponent/>
        <CardProductContainer mainTitle={'Most Recent'} btnTitle={'More'} path={'/allproduct'}/>
        <BrandFeature title={'Most Famous Brands'} btntitle={'More'}/>
        {/* <Footer/> */}
    </div>
  )
}

export default HomePage