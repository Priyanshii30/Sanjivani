import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { RiArrowRightSLine } from "react-icons/ri"; // Importing right arrow icon
import Register from "../auth/register";
import Login from "../auth/login";
import { useAuth } from "../../contexts/authContext";
import { doSignOut } from "../../firebase/auth";
import Button from '@mui/material/Button';

const Navbar = () => {
  const [LoginIsOpen, setLoginIsOpen] = useState(false);
  const [SignUp, setSignUp] = useState(false);

  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await doSignOut();
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleclick = () => {
    setLoginIsOpen(true);
  };

  const handleClickSignUp = () => {
    setSignUp(true);
  };

  const openGame = () => {
    window.open('/Simon says Game/index.html', '_blank');
  };

  const openAshtang = () => {
    window.open('http://localhost:3001/', '_blank'); // Change the port here
  };

  const openDiet = () => {
    window.open('https://diet-recommendation-system.streamlit.app/', '_blank'); // Change the port here
  };

  

  return (
    <>
      <header
        className="bg-black text-gray-600 body-font"
        style={{
          color: "black",
          opacity: "100%",
          backdropFilter: "blur(10px)",
          backgroundColor: "transparent",
          top: 0,
          zIndex: 1000,
          textDecoration: "none",
          marginTop: '15px',
          position: 'sticky',
          paddingTop: '0',
          height: '50px'
        }}
      >
        <div className="container mx-auto flex flex-wrap p-2.25rem flex-col md:flex-row items-center" style={{ background: 'transparent' }}
          id="navbar">
          <Link to="/" >
            <div
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
              style={{ margin: "-12px" }}
            >
              <img
                src='https://cdn-icons-png.flaticon.com/512/2957/2957839.png'
                alt="Logo"
                className="ml-5 w-32 h-32 object-cover rounded-full"
                style={{ height: "50px", width: "49px" }}
              />
              <span
                className="ml-3 text-4xl text-gray"
                style={{ color: "#335b39", fontFamily: 'math', fontWeight: 'bolder' }}
              >
                Sanjivini
              </span>
            </div>
          </Link>
          <nav className="navcompo md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-lg">
            <div>
              <Link to="/">
                <Button
                  className="mx-4 hover:text-white-900 px-4 py-2 rounded-md hover:border-black hover:text-white transition-colors"
                  style={{ color: "black", fontWeight: "bold" ,margin:"0 10px 0 10px",fontSize:"20px"  }}
                >
                  Home
                </Button>
              </Link>
              <Link to="/About">
                <Button
                  className="mx-4 hover:text-gray-900"
                  style={{ color: "black", fontWeight: "bold",margin:"0 10px 0 10px",fontSize:"20px" }}
                >
                  About
                </Button>
              </Link>
              <Button
                className="mx-4 hover:text-gray-900"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textDecoration: "none",
                  fontSize:"20px",
                  margin:"0 10px 0 10px"
                }}
                onClick={openGame}
              >
                Game
              </Button>
              <Button
                className="mx-4 hover:text-gray-900"
                style={{ color: "black", fontWeight: "bold",margin:"0 10px 0 10px",fontSize:"20px"  }}
                onClick={openAshtang}
              >
                Ashtang
              </Button>
            </div>
            <Link to="/About">
                <Button
                  className="mx-4 hover:text-gray-900"
                  style={{ color: "black", fontWeight: "bold",margin:"0 10px 0 10px",fontSize:"20px" }}
                  onClick={openDiet}
                >
                  Diet
                </Button>
              </Link>
          </nav>
          {userLoggedIn ? (
            <Button
              className="inline-flex items-center bg-black-100 border-0 py-1 px-5 focus:outline-none hover:bg-gray-200 rounded black"
              onClick={handleLogout}
              style={{
                background: "#83baec", color: "white", fontSize: "large",
                fontWeight: "649", color: 'black'
              }}
            >
              Logout
              <span>
                <RiArrowRightSLine />
              </span>
            </Button>
          ) : (
            <>
              <div className="flex flex-row text-bold ">
                <Button
                  variant="contained"
                  onClick={handleclick}
                  style={{
                    marginLeft: "2rem",
                    display: "flex",
                    alignItems: "center",
                    marginRight: "20px",
                  }}
                >
                  <span>Login</span>
                  <span>
                    <RiArrowRightSLine />
                  </span>
                </Button>

                {LoginIsOpen && (
                  <Popup
                    open={LoginIsOpen}
                    onClose={() => {
                      setLoginIsOpen(false);
                    }}
                    modal
                    nested
                    className="center-popup"
                  >
                    <Login />
                  </Popup>
                )}
                <Button
                  variant="outlined"
                  onClick={handleClickSignUp}
                  style={{
                    marginRight: "20px",
                  }}
                >
                  Sign-Up
                </Button>
              </div>

              {SignUp && (
                <Popup
                  open={SignUp}
                  onClose={() => {
                    setSignUp(false);
                  }}
                  modal
                  nested
                  className="center-popup"
                >
                  <Register />
                </Popup>
              )}
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
