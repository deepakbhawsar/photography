import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res.data.success) {
        toast.success(res.data.message);

        navigate("/login");
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
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-10 col-sm-8 col-md-7 col-lg-6 m-auto">
            <div className="card ">
              <div className="card-body ">
                <h4 className="text-center">RESET PASSWORD</h4>
                <input
                  type="email"
                  className="form-control my-3 py-2 mt-5"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="text"
                  className="form-control my-3 py-2 mt-5"
                  placeholder="What is your Sports"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  required
                />
                <input
                  type="password"
                  className="form-control my-3 py-2"
                  placeholder="Enter a new Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <div className="text-center mt-3">
                  <button
                    className="btn btn-primary mt-2"
                    onClick={handleSubmit}
                  >
                    RESET
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
