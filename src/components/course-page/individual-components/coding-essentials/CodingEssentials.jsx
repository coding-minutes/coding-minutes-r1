import React, {useEffect} from "react";


import Navbar from "../../../navbar/Navbar";
import CourseTitle from "./course-title/CourseTitle";
import CourseDescription from "./course-description/CourseDescription";
import BuyOnUdemy from "./buy-on-udemy/BuyOnUdemy";
import FAQ from "../../../faq/FAQ";
import Footer from "../../../footer/Footer";

const CodingEssentials = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div>
      <Navbar />
      <CourseTitle />
      <CourseDescription />
      <BuyOnUdemy />
      <FAQ />
      <Footer />
      1
    </div>
  );
};

export default CodingEssentials;
