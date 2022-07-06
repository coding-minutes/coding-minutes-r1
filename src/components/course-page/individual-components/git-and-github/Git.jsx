import React, {useEffect} from 'react'
import Navbar from "../../../navbar/Navbar";
import CourseTitle from "./course-title/CourseTitle";
import CourseDescription from "./course-description/CourseDescription";
import BuyOnUdemy from "./buy-on-udemy/BuyOnUdemy";
import FAQ11 from "./faq/FAQ11";
import Footer from "../../../footer/Footer";
const Git = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div>
    <Navbar />
    <CourseTitle />
    <CourseDescription />
    <BuyOnUdemy />
    <FAQ11 />
    <Footer />
  </div>
  )
}

export default Git