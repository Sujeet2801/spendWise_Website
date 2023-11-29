
import React from "react";

import "./Update.css";

import UpdateForm from "./UpdateForm";
import ExpenseForm from "../../pages/form/Online";

// images
import online from "../../components/image/10.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import { Box, Button } from "@mui/material";

export default function UpdatePage() {
  return (
    <>
      {/* Heading and Tagline */}
      <div
        class="container d-flex justify-content-center align-items-center"
        style={{ minHeight: 100, width: 558 }}
      >
        <div class="text-center" style={{ marginTop: 20 }}>
          <h2 style={{ fontSize: 39 }}>Update your expenses here</h2>
          <p>
          "Effortless finance tracking: Streamline your spending with ease, 
          update your expenses here for a smarter, stress-free financial journey."
          </p>
        </div>
      </div>

      <div className="dashboard">
        {/* Online Expense */}
        <Container fluid>
          <Row>
            <Col sm={6}>
              <UpdateForm
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
              />
            </Col>
          </Row>
        </Container>

        <hr class="featurette-divider" style={{marginLeft: 67, width: 1080}}></hr>

        {/* Electricity Expense */}
        <Container fluid>
          <Row>
            <Col sm={6}>
              <img
                style={{ marginTop: 10, borderRadius: 10, marginLeft: 75 }}
                width={500}
                src={online} // Replace with your image source
                alt={`Image`}
                className="img-fluid"
              />
            </Col>

            <Col sm={6} style={{ marginLeft: -72, marginTop: 4 }}>
              <UpdateForm
                heading="Electricity Expense"
                apiUrl="http://localhost:5000/api/consumption"
                style={{height: 450}}
              />
            </Col>
          </Row>
        </Container>

        <hr class="featurette-divider" style={{marginLeft: 67, width: 1080}}></hr>

        {/* Investment */}
        <Container fluid>
          <Row>
            <Col sm={6}>
              <UpdateForm
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

      </div>
    </>
  );
}
