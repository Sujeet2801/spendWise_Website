// // import { Button, TextField } from "@mui/material";
// // import React, { useEffect, useState } from "react";
// // import "chart.js";

// // function ElectricityChart(props) {
// //   const [data, setData] = useState([]);
// //   const [chartInstance, setChartInstance] = useState(null); // Maintain a reference to the chart instance
// //   const [showChart, setShowChart] = useState(false); // Control chart visibility
// //   const [username, setUsername] = useState("");

// //   useEffect(() => {
// //     if (showChart) {
// //       createChart(); // Create the chart when showChart is true
// //     }
// //   }, [data, showChart]);

// //   const fetchData = async () => {
// //     if (!username) {
// //       console.error("Username is required.");
// //       return;
// //     }

// //     try {
// //       const response = await fetch(props.apiUrl);
// //       if (response.status === 200) {
// //         const jsonData = await response.json();
// //         setData(jsonData);
// //         setShowChart(true);
// //       } else {
// //         console.error("Error fetching data");
// //       }
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //     }
// //   };

// //   const createChart = () => {
// //     if (!chartInstance && data.length > 0) {
// //       const ctx = document.getElementById("myChart");
// //       const newChartInstance = new window.Chart(ctx, {
// //         type: "bar",
// //         data: {
// //           labels: data.map((item) => item.month),
// //           datasets: [
// //             {
// //               label: "Power (Watts)",
// //               data: data.map((item) => item.total),
// //               backgroundColor: [
// //                 "#e74c3c",
// //                 "rgba(255, 159, 64, 0.2)",
// //                 "rgba(255, 205, 86, 0.2)",
// //                 "rgba(75, 192, 192, 0.2)",
// //                 "rgba(54, 162, 235, 0.2)",
// //                 "rgba(153, 102, 255, 0.2)",
// //                 "rgba(201, 203, 207, 0.2)",
// //                 "rgba(255, 99, 132, 0.2)",
// //                 "rgba(255, 159, 64, 0.2)",
// //                 "rgba(255, 205, 86, 0.2)",
// //                 "rgba(75, 192, 192, 0.2)",
// //               ],
// //               borderColor: [
// //                 "rgb(255, 99, 132)",
// //                 "rgb(255, 159, 64)",
// //                 "rgb(255, 205, 86)",
// //                 "rgb(75, 192, 192)",
// //                 "rgb(54, 162, 235)",
// //                 "rgb(153, 102, 255)",
// //                 "rgb(201, 203, 207)",
// //                 "rgb(255, 99, 132)",
// //                 "rgb(255, 159, 64)",
// //                 "rgb(255, 205, 86)",
// //                 "rgb(75, 192, 192)",
// //               ],
// //               borderWidth: 2,
// //             },
// //           ],
// //         },
// //         options: {
// //           responsive: false,
// //         },
// //       });

// //       // Set the new chart instance in state
// //       setChartInstance(newChartInstance);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1 style={{ textAlign: "center" }}>{props.heading}</h1>
// //       <TextField
// //         label="Username"
// //         variant="outlined"
// //         value={username}
// //         onChange={(e) => setUsername(e.target.value)}
// //       />
// //       <Button variant="contained" onClick={fetchData}>
// //         Show Chart
// //       </Button>
// //       {showChart && (
// //         <div>
// //           <canvas
// //             id="myChart"
// //             aria-label="chart"
// //             height={500}
// //             width={800}
// //           ></canvas>
// //         </div>
// //       )}
// //       {/* {data.length === 0 && <p>No data available.</p>} */}
// //     </div>
// //   );
// // }

// // export default ElectricityChart;

import React, { useEffect, useState } from "react";
import "chart.js";

function ConsumptionChart(props) {
  const [data, setData] = useState([]);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      createChart();
    }
  }, [data]);

  const fetchData = async () => {
    try {
      const response = await fetch(props.apiUrl);
      if (response.status === 200) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        console.error("Error fetching data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const createChart = () => {
    if (data.length > 0) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      const ctx = document.getElementById(props.id); // Use the ID from props
      const newChartInstance = new window.Chart(ctx, {
        type: "bar",
        data: {
          labels: data.map((item) => item.month),
          datasets: [
            {
              label: props.heading,
              data: data.map((item) => item.total),
              backgroundColor: [
                "#e74c3c",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(201, 203, 207, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)",
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
              ],
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: false,
        },
      });

      setChartInstance(newChartInstance);
    }
  };

  return (
    <div>
      {/* <h1 style={{ textAlign: "center" }}>{props.heading}</h1> */}
      {data.length === 0 && <p>No data available for {props.heading}.</p>}
      <div>
        <canvas
          id={props.id}
          aria-label="chart"
          height={200}
          width={400}
        ></canvas>
      </div>
    </div>
  );
}

export default ConsumptionChart;
