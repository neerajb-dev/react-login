import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import UserDetail from "./components/user-detail/user-detail.component";
import Home from "./pages/home/home.component";
import Login from "./pages/login/login.component";
import Product from "./pages/product/product.component";
import SignUp from "./pages/signup/signup.component";
import UserDashboard from "./pages/user-dashboard/user-dashboard.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/dashboard/:id" element={<UserDetail />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
