import React, { useState } from "react";

// CSS File
import "./Online.css";

// images
import image4 from "../../components/image/image1.png";

// Notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ExpenseForm(props) {
  const [username, setUsername] = useState("");
  const [month, setMonth] = useState("");
  const [total, setTotal] = useState("");
  // const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(props.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, month, total }),
      });

      if (response.ok) {
        // Handle success, e.g., reset form
        setUsername("");
        setMonth("");
        setTotal("");
        // setError(false);

        toast.success("Data submitted successfully!", {
          position: "top-right",
          autoClose: 3000, // Close the notification after 3 seconds
        });
      } else {
        // Handle error, e.g., display an error message
        toast.error("Data not submitted", {
          position: "top-right",
          autoClose: 3000, // Close the notification after 3 seconds
        });

        console.error("Failed to add expense");
        // setError(true);
      }
    } catch (error) {
      // Handle unexpected errors
      toast.error("Data not submitted", {
        position: "top-right",
        autoClose: 3000, // Close the notification after 3 seconds
      });
      console.error("An error occurred", error);
    }
  };

  return (
    <>
      <div
        class="row featurette"
        style={{ marginTop: 10, justifyContent: "center" }}
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
              <button type="submit">Add Expense</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default ExpenseForm;
