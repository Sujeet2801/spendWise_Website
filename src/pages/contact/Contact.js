import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://backend-sujeet2801.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (response.ok) {
        // Handle success, e.g., reset form
        setName("");
        setEmail("");
        setMessage("");

        toast.success("Message sent successfully", {
          position: "top-right",
          autoClose: 3000, // Close the notification after 3 seconds
        });
      } else {
        // Handle error, e.g., display an error message
        toast.error("Message not sent", {
          position: "top-right",
          autoClose: 3000, // Close the notification after 3 seconds
        });

        console.error("Failed to add expense");
        // setError(true);
      }
    } catch (error) {
      toast.error("Data not submitted successfully!", {
        position: "top-right",
        autoClose: 3000, // Close the notification after 3 seconds
      });
      console.error("An error occurred", error);
    }
  };

  return (
    <>
      <div className="container contact-container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2>Message Us</h2>
            <form>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your name here"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
