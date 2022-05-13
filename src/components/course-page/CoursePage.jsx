import React from "react";
import "./coursePage.css";

import Navbar from "../navbar/Navbar";
import CourseTitle from "./course-components/course-title/CourseTitle";
import CourseDescription from "./course-components/course-description/CourseDescription";
import BuyOnUdemy from "./course-components/buy-on-udemy/BuyOnUdemy";
import FAQ from "../faq/FAQ";
import Footer from "../footer/Footer";

const CoursePage = () => {
  return (
    <div>
      <Navbar />
      <CourseTitle />
      <CourseDescription />
      <BuyOnUdemy />
      <FAQ />
      <Footer />
    </div>
  );
};

export default CoursePage;
