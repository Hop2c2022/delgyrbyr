import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import { Login } from "./pages/Login"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/products" element={<div> <h1>Products</h1> </div>} />
              <Route path="/services" element={<div> <h1>Services</h1> </div>} />
              <Route path="/contacts" element={<div> <h1>Contacts</h1> </div>} />
              <Route path="/jorno" element={<div> <h1>Hah No.</h1> </div>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/" element={<Link to={"/login"}> <h1> Login </h1> </Link>}/>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;