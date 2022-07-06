import React, { useEffect } from "react";
import Navbar from "../../../navbar/Navbar";
import CourseTitle from "./course-title/CourseTitle";
import CourseDescription from "./course-description/CourseDescription";
import BuyOnUdemy from "./buy-on-udemy/BuyOnUdemy";
import FAQ1 from "./faq/FAQ1";
import Footer from "../../../footer/Footer";
const CppEssentials = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div>
      <Navbar />
      <CourseTitle />
      <CourseDescription />
      <BuyOnUdemy />
      <FAQ1 />
      <Footer />
    </div>
  );
};

export default CppEssentials;
