import { Header, Footer, Login, Register } from "./components";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  LoginRegister,
  BooksByCategory,
  RegisterSeller,
  Cart,
} from "./pages/";
import "./index.css";
function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-register/*" element={<LoginRegister />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/books/:category" element={<BooksByCategory />} />
          <Route path="/register-seller" element={<RegisterSeller />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
