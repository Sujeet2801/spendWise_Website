import React from 'react';
import './Home.css';
// import StylishCard from '../../components/card/Card';

// Home Sections
import Section1 from '../../components/section/section1/Section1';
import Section2 from '../../components/section/section2/Section2';
import Section3 from '../../components/section/section3/Section3';

function Home() {
  return (
    <>
      <Section1/> 
      <Section2/>
      <Section3/>
    </>
  );
}

export default Home;
