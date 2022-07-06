import React, {useEffect} from 'react'
import Navbar from "../../../navbar/Navbar";
import CourseTitle from "./course-title/CourseTitle";
import CourseDescription from "./course-description/CourseDescription";
import BuyOnUdemy from "./buy-on-udemy/BuyOnUdemy";
import FAQ6 from "./faq/FAQ6";
import Footer from "../../../footer/Footer";
const GraphAlgorithms = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div>
    <Navbar />
    <CourseTitle />
    <CourseDescription />
    <BuyOnUdemy />
    <FAQ6 />
    <Footer />
  </div>
  )
}

export default GraphAlgorithms