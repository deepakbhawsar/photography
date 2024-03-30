import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res.data.success) {
        toast.success(res.data.message);

        setAuth({
          ...auth,
          user: await res.data.user,
          token: await res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(await res.data));

        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <section>
      <div className="container mt-5 pt-5 mb-5">
        <div className="row">
          <div className="col-10 col-sm-8 col-md-7 col-lg-6 m-auto">
            <div className="card ">
              <div className="card-body ">
                <h4 className="text-center">Login Form</h4>
                <input
                  type="email"
                  className="form-control my-3 py-2 mt-5"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  className="form-control my-3 py-2"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="text-center mt-3">
                  <button
                    className="btn btn-primary mt-2"
                    onClick={handleSubmit}
                  >
                    login
                  </button>
                  {/* <div className="">
                    <button
                      className="btn btn-primary mt-2"
                      onClick={() => {
                        navigate("/forgot-password");
                      }}
                    >
                      Forgot Password
                    </button>
                  </div> */}
                  <Link className="nav-link mt-3" to="/signup">
                    Create a new account
                  </Link>
                  <Link className="nav-link mt-3" to="/forgot-password">
                    Forgot Password
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Login;
