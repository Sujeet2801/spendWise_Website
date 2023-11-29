import React from "react";
import "./About.css";
import { FaEnvelope, FaPhone, FaMapMarker } from "react-icons/fa";

import image from "../images/image.png";
import image1 from "../../components/image/9.png";

const teamMembers = [
  {
    name: "Vikas Kumar Yadav",
    role: "Frontend Developer",
    bio: "Vikas is an experienced frontend developer who specializes in creating intuitive user interfaces. He loves turning designs into interactive web applications.",
    imageUrl: "jane-smith.jpg",
  },
  {
    name: "Saksham Sharma",
    role: "Frontend Developer",
    bio: "Saksham is a passionate frontend developer who led the development team to success.He enjoys solving complex problems and has a keen eye for detail.",
    imageUrl: "john-doe.jpg",
  },
  {
    name: "Utkarsh Upadhyay",
    role: "Frontend Developer",
    bio: "Utkarsh is an experienced frontend developer who specializes in creating intuitive user interfaces. He loves turning designs into interactive web applications.",
    imageUrl: "jane-smith.jpg",
  },
  {
    name: "Vishal Rai",
    role: "Backend Developer",
    bio: "Vishal is a backend developer who designs and maintains the server-side of web applications, ensuring data handling, logic, and system performance, enabling seamless user experiences while collaborating with frontend and database teams.",
    imageUrl: "jane-smith.jpg",
  },
  {
    name: "Sujeet Kumar Gupta",
    role: "Web Developer",
    bio: "A web developer is a skilled professional who creates and maintains websites and web applications using programming languages, frameworks, and tools for online functionality and user interaction..",
    imageUrl: "jane-smith.jpg",
  },
  // Add more team members as needed
];

function About() {
  return (
    <>
      <div>
        <img style={{ width: 1250, height: 400 }} src={image1} alt="" />
      </div>

      <p className="aboutp">
        "Unlock Financial Clarity: Your Money, Your Way. Discover, Track, and
        Take Control of Your Expenses with Ease. Your Comprehensive Expense
        Tracker – Simplified, Secure, and Smart."
      </p>

      <div className="about-container contact-container">
        <h2 className="container">About Expense Tracker</h2>
        <img className="about-image" src={image} alt="about-image" />
        <p>
          Welcome to MyExpenseTracker! Your one-stop solution for comprehensive
          expense tracking. Easily record, categorize, and analyze your
          expenditures, empowering you to take control of your finances
          effortlessly. Start tracking today for a brighter financial future!
        </p>

        {/* <div className="container ">
          <h2 className="container">Our Mission</h2>
          <img className="about-image" src={image} alt="about-image" />
          <p>
            Our mission is to simplify your financial life. With us,
            effortlessly monitor and manage your expenses, gain insights into
            your spending habits, and achieve your financial goals. Take control
            of your money today with our user-friendly, intuitive solution.
            Financial empowerment starts here.
          </p>
        </div> */}

        <h2 className="container">Key Features</h2>
        <img src={image} alt="about-image" />
        <p>
          A key feature for an expense tracking website should include intuitive
          user-friendly interfaces for entering expenses, automatic
          categorization and tagging, real-time updates and notifications,
          customizable budgeting tools, secure data encryption, and robust
          reporting and analytics to help users gain insights into their
          financial habits.
        </p>

        <h2 className="container">Our Team</h2>
        <img src={image} alt="about-image" />
        <div className="team">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              {/* <img src={member.imageUrl} alt={member.name} /> */}
              <h4>{member.name}</h4>
              <p className="about-member">{member.role}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>

        {/* <h2 className="container">Contact Us</h2>
        <img src={image} alt="about-image" />
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope /> Email: contact@ecotrack.com
          </div>
          <div className="contact-item">
            <FaPhone /> Phone: +1 (123) 456-7890
          </div>
          <div className="contact-item">
            <FaMapMarker /> Address: 123 Green Street, Eco City
          </div>
        </div> */}
      </div>
    </>
  );
}

export default About;
