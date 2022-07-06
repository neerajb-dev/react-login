import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import Home from "./pages/home/home.component";
import Login from "./pages/login/login.component";
import Product from "./pages/product/product.component";
import SignUp from "./pages/signup/signup.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
