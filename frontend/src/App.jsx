import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import LoginPopupModal from "./components/LoginPopup/LoginPopupModal.jsx"
import About from './components/About/About'
import AOS from 'aos'
import "aos/dist/aos.css"
import Businesses from './components/Businesses/Businesses'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'
const App = () => {
  const [loginPopup, setLoginPopup] = React.useState(true);

  const toggleLoginPopup = () => {
    setLoginPopup(!loginPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return(
     <div>
      <Navbar toggleLoginPopup={toggleLoginPopup}/>
      <Hero toggleLoginPopup={toggleLoginPopup}/>
      <LoginPopupModal 
       toggleLoginPopup={toggleLoginPopup}
       loginPopup={loginPopup} />
      <About />
      <Businesses />
      <Products />
      <Footer />
     </div>
  )
}
export default App
