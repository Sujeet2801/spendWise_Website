
import React from "react";

import "./Dashboard.css";

import { useNavigate } from "react-router-dom";

// Form
import ExpenseForm from "../form/Online";

//images
import online from "../../components/image/10.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Box, Button } from "@mui/material";

const Dashboard = () => {
  const navigate = useNavigate()

  const handelNavigate =() => {
    navigate("/")
  }

  const handelOpenResponsePage = () => {
    navigate("/response")
  }

  return (
    <>
      {/* Heading and Tagline */}
      <div
        class="container d-flex justify-content-center align-items-center"
        style={{ minHeight: 100, width: 558 }}
      >
        <div class="text-center" style={{ marginTop: 20 }}>
          <h2 style={{ fontSize: 39 }}>List down your expenses here</h2>
          <p>
            "Trim the fat, not the quality. Spend smart, make it last. Your
            budget's best friend, we make expenses a breeze."
          </p>
        </div>
      </div>

      <div className="dashboard">
        {/* Online Expense */}
        <Container fluid>
          <Row>
            <Col sm={6}>
              <ExpenseForm
                heading="Online Expense"
                apiUrl="http://localhost:5000/api/online"
                style={{marginTop: 10}}
              />
            </Col>
            <Col sm={6}>
              <img
                style={{ marginTop: 10, borderRadius: 10 }}
                width={500}
                height={380}
                src={online} // Replace with your image source
                alt={`Image`}
                // className="img-fluid"
              />
            </Col>
          </Row>
        </Container>

        <hr class="featurette-divider" style={{marginLeft: 46, width: 1025}}></hr>

        {/* Electricity Expense */}
        <Container fluid>
          <Row>
            <Col sm={6}>
              <img
                style={{ marginTop: 10, borderRadius: 10, marginLeft: 40 }}
                width={500}
                src={online} // Replace with your image source
                alt={`Image`}
                className="img-fluid"
              />
            </Col>

            <Col sm={6} style={{ marginLeft: -28, marginTop: 4 }}>
              <ExpenseForm
                heading="Electricity Expense"
                apiUrl="http://localhost:5000/api/consumption"
                style={{height: 450}}
              />
            </Col>
          </Row>
        </Container>

        <hr class="featurette-divider" style={{marginLeft: 46, width: 1025}}></hr>

        {/* Investment */}
        <Container fluid>
          <Row>
            <Col sm={6}>
              <ExpenseForm
                heading="Investment"
                apiUrl="http://localhost:5000/api/investment"
                style={{marginTop: 10}}
              />
            </Col>
            <Col sm={6}>
              <img
                style={{ marginTop: 10, borderRadius: 10 }}
                width={500}
                height={380}
                src={online} // Replace with your image source
                alt={`Image`}
                // className="img-fluid"
              />
            </Col>
          </Row>
        </Container>

        <hr class="featurette-divider" style={{marginLeft: 46, width: 1025}}></hr>

        {/* Travel Expense */}
        <Container fluid>
          <Row>
            <Col sm={6}>
              <img
                style={{ marginTop: 10, borderRadius: 10, marginLeft: 40 }}
                width={500}
                src={online} // Replace with your image source
                alt={`Image`}
                className="img-fluid"
              />
            </Col>

            <Col sm={6} style={{ marginLeft: -32, marginTop: 4 }}>
              <ExpenseForm
                heading="Travel Expense"
                apiUrl="http://localhost:5000/api/travel"
                style={{height: 450}}
              />
            </Col>
          </Row>
        </Container>

        <hr class="featurette-divider" style={{marginLeft: 46, width: 1025}}></hr>

        {/* Personal Expenses */}
        <Container fluid>
          <Row>
            <Col sm={6}>
              <ExpenseForm
                heading="Personal Expenses"
                apiUrl="http://localhost:5000/api/personal"
                style={{marginTop: 10}}
              />
            </Col>
            <Col sm={6}>
              <img
                style={{ marginTop: 10, borderRadius: 10 }}
                width={500}
                height={380}
                src={online} // Replace with your image source
                alt={`Image`}
                // className="img-fluid"
              />
            </Col>
          </Row>
        </Container>

        <hr class="featurette-divider" style={{marginLeft: 46, width: 1025}}></hr>

        {/* Grocery */}
        <Container fluid>
          <Row>
            <Col sm={6}>
              <img
                style={{ marginTop: 10, borderRadius: 10, marginLeft: 40 }}
                width={500}
                src={online} // Replace with your image source
                alt={`Image`}
                className="img-fluid"
              />
            </Col>

            <Col sm={6} style={{ marginLeft: -32, marginTop: 4 }}>
              <ExpenseForm
                heading="Liability"
                apiUrl="http://localhost:5000/api/consumption"
                style={{height: 450}}
              />
            </Col>
          </Row>
        </Container>

        <hr class="featurette-divider" style={{marginLeft: 46, width: 1025}}></hr>

        {/* Salary */}
        <Container fluid>
          <Row>
            <Col sm={6}>
              <ExpenseForm
                heading="Salary"
                apiUrl="http://localhost:5000/api/salary"
                style={{marginTop: 10}}
              />
            </Col>
            <Col sm={6}>
              <img
                style={{ marginTop: 10, borderRadius: 10 }}
                width={500}
                height={380}
                src={online} // Replace with your image source
                alt={`Image`}
                // className="img-fluid"
              />
            </Col>
          </Row>
        </Container>

        {/* Submit and home button */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop={6}
        >
          {/* Submit button */}
          <Button
            variant="contained"
            color="success"
            style={{ width: 150, height: 50, fontSize: 16 }}
            onClick={handelOpenResponsePage}
          >
            Submit
          </Button>

          {/* Home Button */}
          <Button
            variant="contained"
            color="primary"
            style={{ width: 150, height: 50, fontSize: 16, marginLeft: 5 }}
            onClick={handelNavigate}
          >
            Home
          </Button>
        </Box>
      </div>
    </>
  );
};

export default Dashboard;
