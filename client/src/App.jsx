/*import NewsComponent from "./components/NewsComponent"
import Login from "./components/Login"
import Register from "./components/Register"
import Business from "./components/Business"
import Entertainment from "./components/Entertainment"
import Lifestyle from "./components/Lifestyle"
import Health from "./components/Health"
import Sports from "./components/Sports"
import {BrowserRouter,Routes,Route} from "react-router-dom"



function App() {
 

  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login/>}></Route>
       </Routes>
       <Routes>
        <Route path="/register" element={<Register/>}></Route>
       </Routes>
       <Routes>
        <Route path="/latestNews" element={<NewsComponent/>}></Route>
       </Routes>
       <Routes>
        <Route path="/BusinessNews" element={<Business/>}></Route>
       </Routes>
       <Routes>
        <Route path="/EntertainmentNews" element={<Entertainment/>}></Route>
       </Routes>
       <Routes>
        <Route path="/LifestyleNews" element={<Lifestyle/>}></Route>
       </Routes>
       <Routes>
        <Route path="/HealthNews" element={<Health/>}></Route>
       </Routes>
       <Routes>
        <Route path="/SportsNews" element={<Sports/>}></Route>
       </Routes>

       
      
      </BrowserRouter>
    </>
  )
}

export default App */


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

