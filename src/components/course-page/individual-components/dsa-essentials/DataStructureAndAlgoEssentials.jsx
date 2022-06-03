import React, {useEffect} from 'react'
import Navbar from "../../../navbar/Navbar";
import CourseTitle from "./course-title/CourseTitle";
import CourseDescription from "./course-description/CourseDescription";
import BuyOnUdemy from "./buy-on-udemy/BuyOnUdemy";
import FAQ from "../../../faq/FAQ";
import Footer from "../../../footer/Footer";
const DataStructureAndAlgoEssentials = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
    return (
      <div>6
      <Navbar />
      <CourseTitle />
      <CourseDescription />
      <BuyOnUdemy />
      <FAQ />
      <Footer />
    </div>
      );
}

export default DataStructureAndAlgoEssentials