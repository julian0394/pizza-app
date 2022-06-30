import React from 'react';
// Components
import Navbar from './Navbar';
import Footer from './Footer';
import Banner from './Banner';
import PizzaList from './PizzaList';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {/* <Banner /> */}
      <PizzaList />
      {/* {children} */}
      <Footer />
    </div>
  )
}

export default Layout;
