import React, { useState, useEffect } from "react";

import "./OnlineList.css";

function ExpenseList() {
  const [username, setUsername] = useState("");
  const [userdata, setUserdata] = useState([]);

  const fetchOnlineExpenseData = async () => {
    try {
      const response = await fetch(
        `https://backend-sujeet2801.vercel.app/api/online/${username}`
      );

      if (response.status === 200) {
        const data = await response.json();
        setUserdata(data);
      } else {
        console.error("Error fetching data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (username) {
      fetchOnlineExpenseData();
    }
  }, [username]);

  return (
    <div className="list-container">
      <h2>Online Expense List</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input-field"
      />

      <ul className="expense-list">
        {userdata.map((item, index) => (
          <li key={index} className="expense-item">
            <span className="username">Username: {item.username}</span>
            <span className="month">Month: {item.month}</span>
            <span className="total">Total: {item.total}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
