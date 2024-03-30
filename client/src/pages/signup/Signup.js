import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  return (
    <section>
      <div className="container mt-5 pt-5 mb-5">
        <div className="row">
          <div className="m-auto col-10 col-sm-8 col-md-7 col-lg-6 ">
            <div className="card">
              <div className="card-body">
                <div className="text-center">
                  <h4 className="m-auto">Signup Form</h4>
                  <input
                    type="name"
                    name=""
                    id=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control my-3 py-2 mt-5"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    name=""
                    id=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control my-3 py-2 "
                    placeholder="Email"
                    required
                  />
                  <input
                    type="password"
                    name=""
                    id=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control my-3 py-2 "
                    placeholder="Password"
                    required
                  />
                  <input
                    type="number"
                    name=""
                    id=""
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control my-3 py-2 "
                    placeholder="Phone"
                    required
                  />
                  <input
                    type="address"
                    name=""
                    id=""
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control my-3 py-2 "
                    placeholder="Address"
                    required
                  />
                  <input
                    type="text"
                    name="answer"
                    id=""
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="form-control my-3 py-2 "
                    placeholder="What is your Sports"
                    required
                  />
                </div>
                <div className="text-center mt-3">
                  <button
                    type="button"
                    className="btn btn-primary mt-3"
                    onClick={submitHandler}
                  >
                    Signup
                  </button>
                  <Link to="/login" className="nav-link mt-3">
                    Already have an Account
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

export default Signup;
