import React from 'react'
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Loginform from './Components/LoginForm/Loginform';
import Test from './Components/test';




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
    
  }
  return (
    <>
    <Navbar />
    {component}
    </>
  );
}

export default App;
