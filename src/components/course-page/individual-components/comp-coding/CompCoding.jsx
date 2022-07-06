import React, {useEffect} from 'react'
import Navbar from "../../../navbar/Navbar";
import CourseTitle from "./course-title/CourseTitle";
import CourseDescription from "./course-description/CourseDescription";
import BuyOnUdemy from "./buy-on-udemy/BuyOnUdemy";
import FAQ5 from "./faq/FAQ5";
import Footer from "../../../footer/Footer";
const CompCoding = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div>
    <Navbar />
    <CourseTitle />
    <CourseDescription />
    <BuyOnUdemy />
    <FAQ5 />
    <Footer />
  </div>
  )
}

export default CompCoding