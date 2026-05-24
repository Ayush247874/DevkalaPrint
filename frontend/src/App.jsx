import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Services from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPages";
import TrackOrderPage from "./pages/TrackOrderPage";
import OrderSuccess from "./pages/OrderSuccess";

function App() {

  return (

    <BrowserRouter>
      <SpeedInsights />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/service/:slug"
          element={<ServiceDetails />}
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
         
         <Route
          path="/login"
          element={<Login />}
        /> 
         
         <Route
          path="/signup"
          element={<Signup />}
        />
      
         <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />
          
          <Route
            path="/contact"
            element={<ContactPage />}
          />
           <Route
            path="/track-order"
            element={<TrackOrderPage />}
          />

          <Route
            path="/order-success"
            element={<OrderSuccess />}
          />
      </Routes>

    </BrowserRouter>

  );

}

export default App;