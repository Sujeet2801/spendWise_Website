
import React, { useState } from "react";
import {toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./UpdateForm.css";

import image4 from '../../components/image/image1.png';
import { useNavigate } from "react-router-dom";

function UpdateForm(props) {
  const [username, setUsername] = useState("");
  const [month, setMonth] = useState("");
  const [total, setTotal] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(props.apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, month, total }),
      });

      if (response.ok) {
        // Database update was successful
        setUsername("");
        setMonth("");
        setTotal("");

        toast.success("Data updated successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        toast.error("Failed to update total in the database", {
          position: "top-right",
          autoClose: 3000,
        });
        console.error("Failed to update total in the database");
      }
    } catch (error) {
      toast.error("An error occurred", {
        position: "top-right",
        autoClose: 3000,
      });
      console.error("An error occurred", error);
    }

    
  };

  const navigate = useNavigate()

  const handelNavigate =() => {
    navigate("/dashboard")
  }

  return (
    
    <>
      <div
        class="row featurette"
        style={{ marginTop: 5, justifyContent: "center", marginBottom: 10 }}
      >
        <div className="electricity-calculator">
          <div className="title">
            <h2>{props.heading}</h2>
            <img src={image4} alt="" />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div class="form-row">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                {/* <Typography>Please enter valid username</Typography> */}
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Total"
                    value={total}
                    onChange={(e) => setTotal(e.target.value)}
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group ">
                  <select
                    id="inputState"
                    class="form-control"
                    placeholder="Password"
                    onChange={(e) => setMonth(e.target.value)}
                  >
                    <option value="">Choose month...</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                  
                </div>
              </div>
              <button type="submit"
              >Update Expense</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateForm;
