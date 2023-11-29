import React from "react";

import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";

//images
import image1 from "../../components/image/8.png";
import image2 from "../../components/image/eExpense.png";
import image3 from "../../components/image/Expense.png";
import image4 from "../../components/image/5.jpg";
import dairy from "../../components/image/dairy.png";
import book from "../../components/image/book.png";
import shoe from "../../components/image/shoe.png";

export default function Home1() {
  // const navigate = useNavigate();

  const redirectToLink = () => {
    const externalLink =
      "https://www.lifehack.org/articles/featured/an-introduction-to-expense-tracking.html"; // Replace with your external link
    window.open(externalLink, "_blank");
  };

  const article2 = () => {
    const externalLink = "https://ieeexplore.ieee.org/document/8628070";
    window.open(externalLink, "_blank");
  };

  const article3 = () => {
    const externalLink =
      "https://www.freshbooks.com/hub/accounting/expense-tracking";
    window.open(externalLink, "_blank");
  };

  return (
    <>
      {/* ad image */}
      <img
        class="bd-placeholder-img img-fluid"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: 140x140"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        height={400}
        width={1300}
        src={image1}
        alt=""
      />

      <div
        class="container d-flex justify-content-center align-items-center"
        style={{ minHeight: 100, width: 558 }}
      >
        <div class="text-center" style={{ marginTop: 20 }}>
          <h2>The Tools for Your Goals</h2>
          <p>
            Spend less to save more, invest in your dreams, and secure a
            brighter future. Your financial discipline sets a powerful example
            for others
          </p>
        </div>
      </div>

      <div
        style={{
          alignItems: "center",
          marginTop: 10,
          display: "flex",
          flexWrap: "wrap",
          textAlign: "center",
        }}
        className="container"
      >
        <div class="row">
          <div class="col-lg-4">
            <img
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              src={dairy}
              alt=""
            />

            <h3>Learn. Track. Improve.</h3>
            <p>
              Keeping a digital diary helps you understand your habits and
              increases your likelihood of hitting your goals.
            </p>
          </div>
          <div class="col-lg-4">
            <img
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              src={book}
              alt=""
            />

            <h3>Read Articles.</h3>
            <p>
              "Track expenses effortlessly with our website – financial clarity,
              budgeting made simple, and a brighter financial future."
            </p>
          </div>
          <div class="col-lg-4">
            <img
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              src={shoe}
              alt=""
            />

            <h3>Stay Motivated.</h3>
            <p>
              Track your expenses with us and stay motivated on your financial
              journey
            </p>
          </div>
        </div>
      </div>

      <hr class="featurette-divider container"></hr>

      <div
        class="container d-flex justify-content-center align-items-center"
        style={{ minHeight: 100, width: 558 }}
      >
        <div class="text-center" style={{ marginTop: 20 }}>
          <h2>Article & Inspiration</h2>
          <p>
            "Track expenses efficiently with our articles, gain financial
            control, and make smarter money decisions effortlessly."
          </p>
        </div>
      </div>

      <div className="container">
        <div class="row featurette order-md-1">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">
              What is Expense Tracking? How Will it Help Your Business?.{" "}
            </h2>
            <p class="lead">
              Expense tracking involves monitoring, recording, and analyzing all
              financial expenditures within a business. It helps businesses
              manage costs, identify areas for savings, and make informed
              decisions for improved financial health and profitability.
            </p>
            <Button
              className="btn-primary"
              variant="contained"
              onClick={article3}
              style={{ marginBottom: 10 }}
            >
              Read here
            </Button>
          </div>
          <div class="col-md-5">
            <img
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              src={image3}
              alt=""
            />
          </div>
        </div>

        <hr class="featurette-divider"></hr>

        <div class="row featurette ">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading fw-normal lh-1">
              A Smart Approach to Track Everyday Expense.{" "}
            </h2>
            <p class="lead">
              Tracking everyday expenses is a smart financial practice that
              involves monitoring and recording daily spending. This approach
              enables better budgeting, financial awareness, and achieving
              long-term financial goals.
            </p>
            <Button
              className="btn-primary"
              variant="contained"
              style={{ justifyContent: "center", marginBottom: 10 }}
              onClick={article2}
            >
              Read here
            </Button>
          </div>
          <div class="col-md-5">
            <img
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              src={image2}
              alt=""
            />
          </div>
        </div>

        <hr class="featurette-divider"></hr>

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">
              An Introduction to Expense Tracking.{" "}
            </h2>
            <p class="lead">
              Expense tracking is the art of monitoring and recording your
              financial transactions. It empowers individuals and businesses to
              gain control over their spending, make informed financial
              decisions, and achieve their savings goals.
            </p>
            <Button
              className="btn-primary"
              variant="contained"
              style={{ justifyContent: "center", marginBottom: 10 }}
              onClick={redirectToLink}
            >
              Read here
            </Button>
          </div>

          <div class="col-md-5">
            <img
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              src={image4}
              alt=""
            />
          </div>
        </div>

        <hr class="featurette-divider"></hr>
      </div>
    </>
  );
}
