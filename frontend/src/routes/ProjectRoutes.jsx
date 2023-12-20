import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Homepage";
import Revlon from "../components/Revlon";
import Nyx from "../components/Nyx";
import CartPage from "../pages/CartPage";
import Essie from "../components/Essie";
import CheckoutPage from "../pages/CheckoutPage";
import PurchaseConfirmationPage from "../pages/PurchaseConfirmationPage";
function ProjectRoutes(props) {
  return (
    <Routes>
      {}
      <Route index element={<HomePage {...props} />} />
      <Route path="/cartPage" element={<CartPage {...props} />} />
      <Route path="/revlon" element={<Revlon {...props} />} />
      <Route path="/nyx" element={<Nyx {...props} />} />
      <Route path="/essie" element={<Essie {...props} />} />
      <Route path="/checkoutPage" element={<CheckoutPage {...props} />} />
      <Route path="/purchaseConfirmationPage" element={<PurchaseConfirmationPage {...props} />} />
      {}

      {}
    </Routes>
  );
}

export default ProjectRoutes;
