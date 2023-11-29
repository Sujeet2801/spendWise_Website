import React, { useContext } from "react";
import { Button } from "@mui/material";
import { useState } from "react";

// Data Provider
import { DataContext } from "../../context/DataProvider";

// CSS File
import "./Cover.css";

// Login Dialog & Dashboard page
import LoginDialog from "../../pages/Login/loginDialog";
import Dashboard from "../../pages/dashboard/Dashboard";

export default function Cover() {
  const [open, setOpen] = useState(false);
  const { account } = useContext(DataContext);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <div className="container">
      {account ? (
        <Dashboard />
      ) : (
        <>
          <div className="cover-page">
            <header>
              <h1>Expense Tracker</h1>
              <p className="tagline">Track Your Expenses Effortlessly</p>
            </header>

            <section className="quote-section">
              <blockquote className="quote">
                "A penny saved is a penny earned."
              </blockquote>
            </section>

            <section className="facts-section">
              <h2>Why Choose Us?</h2>
              <ul>
                <li>Real-time expense tracking</li>
                <li>Easy-to-use interface</li>
                <li>Detailed insights and reports</li>
                <li>Secure and private</li>
              </ul>
            </section>

            <p>Login to start tracking your all expenses</p>

            <Button
              style={{ marginRight: 40, width: 150, height: 50, fontSize: 16 }}
              variant="contained"
              color="primary"
              onClick={openDialog}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              Login
            </Button>
          </div>
        </>
      )}
      <LoginDialog open={open} setOpen={setOpen} />
    </div>
  );
}
