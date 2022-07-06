import React, {useEffect} from 'react'
import Navbar from "../../../navbar/Navbar";
import CourseTitle from "./course-title/CourseTitle";
import CourseDescription from "./course-description/CourseDescription";
import BuyOnUdemy from "./buy-on-udemy/BuyOnUdemy";
import FAQ4 from "./faq/FAQ4";
import Footer from "../../../footer/Footer";
const DSALevelUp = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div>
    <Navbar />
    <CourseTitle />
    <CourseDescription />
    <BuyOnUdemy />
    <FAQ4 />
    <Footer />
  </div>
  )
}

export default DSALevelUp