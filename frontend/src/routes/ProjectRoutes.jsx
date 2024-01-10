import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Homepage";
import Revlon from "../components/Revlon";
import Nyx from "../components/Nyx";
import CartPage from "../pages/CartPage";
import Essie from "../components/Essie";
import CheckoutPage from "../pages/CheckoutPage";
import PurchaseConfirmationPage from "../pages/PurchaseConfirmationPage";
import LoginForm from "../components/LoginForm";
import SignUp from "../components/SignUp";
import SearchPage from "../pages/searchPage";
function ProjectRoutes(props) {
  return (
    <Routes>
      {}
      <Route index element={<HomePage {...props} />} />
      <Route path="/cartPage" element={<CartPage {...props} />} />
      <Route path="/revlon" element={<Revlon {...props} />} />
      <Route path="/nyx" element={<Nyx {...props} />} />
      <Route path="/essie" element={<Essie {...props} />} />
      <Route path="/loginForm" element={<LoginForm {...props} />} />
      <Route path="/checkoutPage" element={<CheckoutPage {...props} />} />
      <Route path="/SignUp" element={<SignUp {...props} />} />
      <Route path="/SearchPage" element={<SearchPage {...props} />} />
      <Route path="/purchaseConfirmationPage" element={<PurchaseConfirmationPage {...props} />} />
      {}

      {}
    </Routes>
  );
}

export default ProjectRoutes;
