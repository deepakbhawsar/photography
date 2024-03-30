import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";

function NavComponents() {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });

    localStorage.removeItem("auth");
    toast.success("logout successfully");
  };

  const [show, setShow] = useState(true);

  return (
    <>
      <header className="header">
        <div className="nav-section">
          <div className="brand-and-navBtn">
            <span className="brand-name">
              <img
                src="images/white.png"
                alt="/"
                style={{ height: "5rem", width: "8rem" }}
              />
            </span>
            <span className="navBtn flex">
              <i className="fas fa-bars" onClick={() => setShow(!show)}></i>
            </span>
          </div>
          <div className="showNav">
            {show ? null : (
              <ul>
                <li>
                  <NavLink to={"/"} style={{ color: "white" }}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/gallery"} style={{ color: "white" }}>
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"} style={{ color: "white" }}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
          <nav className="top-nav">
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/gallery"}>Gallery</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              {!auth.user ? (
                <>
                  <li>
                    <NavLink to={"/login"} style={{ color: "white" }}>
                      login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/signup"} style={{ color: "white" }}>
                      signup
                    </NavLink>
                  </li>
                </>
              ) : (
                <>

                  <NavDropdown
                  className="text-white mx-4" 
                    title={auth?.user?.name}
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item
                      onClick={handleLogout}
                      className="text-black" 
                      href={`/dashboard/${
                        auth?.user?.role === 1 ? "admin" : "user"
                      }`}
                    >
                      
                    </NavDropdown.Item>
                    <NavDropdown.Item className="text-black"  href="/login">logout</NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavComponents;
