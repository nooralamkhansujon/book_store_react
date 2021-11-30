import {
  Header,
  Footer,
  Login,
  Register,
  ProfileAccount,
  ProfileMyLists,
  ProfileMyRatingReviews,
  ProfileMyRokomariBalance,
  ProfileWishList,
  ProfileOrders,
} from "./components";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  LoginRegister,
  BooksByCategory,
  RegisterSeller,
  Cart,
  BookDetails,
  Profile,
  InstitutionalOrder,
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
          <Route path="/institutional-order" element={<InstitutionalOrder />} />
          <Route path="/profile/*" element={<Profile />}>
            <Route path="account" element={<ProfileAccount />} />
            <Route path="myList" element={<ProfileMyLists />} />
            <Route path="orders" element={<ProfileOrders />} />
            <Route path="wishlist" element={<ProfileWishList />} />
            <Route
              path="myRokomariBalance"
              element={<ProfileMyRokomariBalance />}
            />
            <Route
              path="MyRatingAndReviews"
              element={<ProfileMyRatingReviews />}
            />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
