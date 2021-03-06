import React, {useEffect} from "react";
import Navbar from "../../../navbar/Navbar";
import CourseTitle from "./course-title/CourseTitle";
import CourseDescription from "./course-description/CourseDescription";
import BuyOnUdemy from "./buy-on-udemy/BuyOnUdemy";
import FAQ2 from "./faq/FAQ2";
import Footer from "../../../footer/Footer";
const PythonMasterCourse = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div>
      <Navbar />
      <CourseTitle />
      <CourseDescription />
      <BuyOnUdemy />
      <FAQ2 />
      <Footer />
    </div>
  );
};

export default PythonMasterCourse;
