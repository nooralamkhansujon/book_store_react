import { Header, Footer, Login, Register } from "./components";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  LoginRegister,
  BooksByCategory,
  RegisterSeller,
  Cart,
  BookDetails,
  Profile,
} from "./pages/";
import "./index.css";
function App() {
  console.log("this app running");
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
          <Route path="/books/details/:book_id" element={<BookDetails />} />
          <Route path="/register-seller" element={<RegisterSeller />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
