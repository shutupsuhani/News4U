import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./components/AuthContext"; // Import the useAuth hook
import NewsComponent from "./components/NewsComponent";
import Login from "./components/Login";
import Register from "./components/Register";
import Business from "./components/Business";
import Entertainment from "./components/Entertainment";
import Lifestyle from "./components/Lifestyle";
import Health from "./components/Health";
import Sports from "./components/Sports";

function App() {
  const { user } = useAuth(); // Access the authenticated user from the context

  // Function to check if user is authenticated
  const isAuthenticated = () => {
    return user !== null;
  };

  // ProtectedRoute component to handle protected routes
  const ProtectedRoute = ({ element, ...rest }) => {
    return isAuthenticated() ? element : <Navigate to="/" />;
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Protected routes */}
          <Route
            path="/latestNews"
            element={<ProtectedRoute element={<NewsComponent />} />}
          />
          <Route
            path="/BusinessNews"
            element={<ProtectedRoute element={<Business />} />}
          />
          <Route
            path="/EntertainmentNews"
            element={<ProtectedRoute element={<Entertainment />} />}
          />
          <Route
            path="/LifestyleNews"
            element={<ProtectedRoute element={<Lifestyle />} />}
          />
          <Route
            path="/HealthNews"
            element={<ProtectedRoute element={<Health />} />}
          />
          <Route
            path="/SportsNews"
            element={<ProtectedRoute element={<Sports />} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
