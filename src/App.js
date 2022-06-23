import React from 'react'
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Loginform from './Components/LoginForm/Loginform';
import Test from './Components/test';
import About from './Components/AboutUs/About';
import Contact from './Components/ContactUs/Contact';
import Table from './Components/Table/Table';






function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/Loginform":
      component = <Loginform />
      break        
    case "/test":
      component = <Test />
      break
    case "/about":
      component = <About />
      break
    case "/contact":
        component = <Contact />
        break
    case "/table":
        component = <Table />
        break
  }
  return (
    <>
    <Navbar />
    {component}
    </>
  );
}

export default App;
