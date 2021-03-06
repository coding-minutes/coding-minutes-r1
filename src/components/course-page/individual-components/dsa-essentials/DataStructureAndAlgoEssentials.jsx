import React, {useEffect} from 'react'
import Navbar from "../../../navbar/Navbar";
import CourseTitle from "./course-title/CourseTitle";
import CourseDescription from "./course-description/CourseDescription";
import BuyOnUdemy from "./buy-on-udemy/BuyOnUdemy";
import FAQ3 from "./faq/FAQ3";
import Footer from "../../../footer/Footer";
const DataStructureAndAlgoEssentials = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
    return (
      <div>
      <Navbar />
      <CourseTitle />
      <CourseDescription />
      <BuyOnUdemy />
      <FAQ3 />
      <Footer />
    </div>
      );
}

export default DataStructureAndAlgoEssentials