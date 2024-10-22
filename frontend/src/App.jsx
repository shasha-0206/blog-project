import Navbar from "./components/Navbar"
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Signin from "./components/signin";
import Signup from "./components/Signup";
import PostLogin from "./components/PostLogin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/index.css'

function App() {
  

  return (
   <>
    <Router> {/* Wrap the application with BrowserRouter */}

        <Routes>  
          <Route path="/" element={<Body />} />  {/* Only Body is rendered on the home page */}

          {/* Child routes that will render inside the Outlet */}
          <Route path="/about" element={<About />} />   
          <Route path="/signin" element={<Signin />} />   
          <Route path="/signup" element={<Signup />} />    
          <Route path="/postsignin" element={<PostLogin />} />    
        </Routes>
        
    </Router>
   </>
  )
}

export default App
