import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/authContext";
// import Navbar from "./components/Cparts/Navbar";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import Home from "./pages/Home";
// import MainUser from "./pages/MainUser";
// import Sidebar from "./components/Cparts/Sidebar";
// import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
// import { RiH1 } from "react-icons/ri";
import About from "./pages/About";
// import Revenue from "./components/Cparts/Revenue";
// import { Plane } from "@react-three/drei";
// import  from "./components/Cparts/";
// import Gallery from "./components/Cparts/Gallery";
import Sponsors from "./pages/Sponsors";
import Plans from "./components/Cparts/Plans";
interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const navigate = useNavigate();
  const [loggedin, setloggedin] = useState(false);
  const { userLoggedIn } = useAuth();

  useEffect(() => {
    if (!userLoggedIn) {
      navigate("/login");
    } 
  }, [userLoggedIn, navigate]);

  return <>{userLoggedIn ? children : null}</>;
};



function App() {
  const {userLoggedIn} = useAuth();
  return (<>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/plans" element={<Plans/>} />
          <Route path="/toprecruters" element={<Sponsors/>} />
          <Route
            path="/auth/*"
            element={
              <AuthGuard>
                <Layout>

                </Layout>
              </AuthGuard>
            }
          ></Route>
        </Routes>
      </Router>
    </AuthProvider>
    </>
  );
}

export default App;
