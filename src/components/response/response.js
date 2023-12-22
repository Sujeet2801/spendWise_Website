import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

// Bar Chart
import ConsumptionChart from "../../pages/chart/Line";
import { useNavigate } from "react-router-dom";

export default function Response() {
  const [username, setUsername] = useState("");
  const [showBarCharts, setShowBarCharts] = useState(false);

  const navigate = useNavigate();

  const handelNavigate = () => {
    navigate("/update");
  };

  const handelOpenResponsePage = () => {
    navigate("/dashboard");
  };

  const toggleBarCharts = () => {
    setShowBarCharts(!showBarCharts);
  };

  return (
    <>
      <div>
        <div className="container" style={{ marginTop: 20 }}>
          <h3 style={{ fontSize: 23 }}>Enter your username to show expense</h3>
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={toggleBarCharts}
            style={{ marginLeft: 5, marginTop: 8 }}
          >
            Show Bar Charts
          </Button>
        </div>

        {showBarCharts && (
          <div className="container">
            
            {/* Electricity Expense Chart */}
            <ConsumptionChart
              heading="Electricity Expense Chart"
              apiUrl={`https://backend-orpin-kappa.vercel.app/api/consumption/${username}`}
              id="myChart1" // Unique ID for the first chart
            />
            {/* Online Expense Chart */}
            <ConsumptionChart
              heading="Online Expense Chart"
              apiUrl={`https://backend-orpin-kappa.vercel.app/api/online/${username}`}
              id="myChart2" // Unique ID for the second chart
            />
            {/* Investment Chart */}
            <ConsumptionChart
              heading="Investment Chart"
              apiUrl={`https://backend-orpin-kappa.vercel.app/api/investment/${username}`}
              id="myChart3" // Unique ID for the third chart
            />

            {/* Salary Chart */}
            <ConsumptionChart
              heading="Salary Chart"
              apiUrl={`https://backend-orpin-kappa.vercel.app/api/salary/${username}`}
              id="myChart4" // Unique ID for the third chart
            />

            {/* Travel Expense Chart */}
            <ConsumptionChart
              heading="Travel Expense Chart"
              apiUrl={`https://backend-orpin-kappa.vercel.app/api/travel/${username}`}
              id="myChart5" // Unique ID for the third chart
            />

            {/* Personal Expenses */}
            <ConsumptionChart
              heading="Personal Expenses Chart"
              apiUrl={`https://backend-orpin-kappa.vercel.app/api/personal/${username}`}
              id="myChart6" // Unique ID for the 6th chart
            />
          </div>
        )}

          {/* Add expense and Update button */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop={6}
          >
            <Button
              variant="contained"
              color="success"
              style={{ width: 190, height: 50, fontSize: 16 }}
              onClick={handelOpenResponsePage}
            >
              Add expense
            </Button>

            <Button
              variant="contained"
              color="primary"
              style={{ width: 190, height: 50, fontSize: 16, marginLeft: 5 }}
              onClick={handelNavigate}
            >
              Update Expense
            </Button>
          </Box>
      </div>
    </>
  );
}
