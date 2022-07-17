import React from "react";
import "./learningPaths.css";
import dartIcon from "../../assets/Images/main/dart.png";
import locationIcon from "../../assets/Images/main/location.png";
import presentationIcon from "../../assets/Images/main/presentation.png";
import allCoursesIcon from "../../assets/Images/main/all-courses.svg";
import exploreNowImage from "../../assets/Images/main/explore-now.svg";
import programmingLanguagesIcon from '../../assets/Images/main/programming-languages.png';
import machineLearningIcon from '../../assets/Images/main/machine-learning.png'
import softwareEngineeringIcon from '../../assets/Images/main/software-engineering.png'
import { ProgrammingForBeginners } from "../../data/ProgrammingForBeginners";
import {DataStructuresAndCompetitive} from "../../data/DataStructuresAndCompetitive";
import {SpecialisationOnAlgorithms} from "../../data/SpecialisationOnAlgorithms"
import {MachineLearningDataScience} from "../../data/MachineLearningDataScience"
import {DeepLearning} from "../../data/DeepLearning"
import {SoftwareEngineeringAndOthers} from "../../data/SoftwareEngineeringAndOthers"
import { Link } from "react-router-dom";

const LearningPaths = () => {
  var c=0;
 
  return (
    <div className="learning-path-container">
      <div className="components-outer-container">
        <div className="learning-path-outer-container">
          <div className="learning-path-internal-container" id="courses">
            <div className="learning-path-about" data-aos="fade-up">
              <h1>Explore learning paths 🔥</h1>
              <p>
                Begin the journey for your dream job with these industry vetted
                learning paths..
              </p>
              <div className="course-types">
                
                <div className="course-type">
                 <a href="#programming-languages" id="rocket-image"> <img src={programmingLanguagesIcon} alt="" /> Programming Languages</a>
                </div>
                <div className="course-type">
                 <a href="#data-structures-and-algorithms"> <img src={dartIcon} alt="" /> Data Structure & Algorithms</a>
                </div>
                <div className="course-type">
                 <a href="#data-structures-and-algorithms"> <img src={locationIcon} alt="" /> Competitive Programming</a>
                </div>
                <div className="course-type">
                  <a href="#specialisation"><img src={presentationIcon} alt="" /> Specialisation</a>
                </div>
                <div className="course-type">
                  <a href="#machine-learning"><img src={machineLearningIcon} alt="" /> Machine Learning</a>
                </div>
                
                <div className="course-type">
                  <a href="#software-engineering"><img src={softwareEngineeringIcon} alt="" />Software Engineering</a>
                </div>
              </div>
            </div>
            <div className="learning-path-course-types">
              <div className="learning-path-course first-row">
                <div className="learning-path-course-title" id="programming-languages">
                Programming Languages
                </div>
                <div className="learning-path-course-row-group">
                  {ProgrammingForBeginners.map((data, key) => {
                    return (
                      <div className="individual-course-items" data-aos="zoom-in" >
                        <div className="course-image">
                          <img src={data.courseThumbnail} alt="" />
                        </div>
                        <div className="learning-path-course-items">
                          <p className={`course-difficulty-level ${data.courseDifficultyColor} `} >{data.courseDifficulty}</p>
                          <p className="course-title">{data.courseTitle}</p>
                          <p className="course-mentor">
                            Mentor : {data.courseMentor}
                          </p>
                          <div className="explore-now">
                            <span className="course-rating">
                              {data.courseRatingStars} {data.courseRatingNumber}
                            </span>
                            <Link to={data.udemyLink}><img src={exploreNowImage} alt="" /></Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                 
                </div>
              </div>

              <div className="learning-path-course second-row">
                <div className="learning-path-course-title" id="data-structures-and-algorithms">
                Data Structures & Algorithms
                </div>
                <div className="learning-path-course-row-group">
                {DataStructuresAndCompetitive.map((data, key) => {
                    return (
                      <div className="individual-course-items" data-aos="zoom-in" >
                        <div className="course-image">
                          <img src={data.courseThumbnail} alt="" />
                        </div>
                        <div className="learning-path-course-items">
                          <p className={`course-difficulty-level ${data.courseDifficultyColor} `}>{data.courseDifficulty}</p>
                          <p className="course-title">{data.courseTitle}</p>
                          <p className="course-mentor">
                            Mentor : {data.courseMentor}
                          </p>
                          <div className="explore-now">
                            <span className="course-rating">
                              {data.courseRatingStars} {data.courseRatingNumber}
                            </span>
                            <Link to={data.udemyLink}><img src={exploreNowImage} alt="" /></Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  
                </div>
              </div>

              <div className="learning-path-course third-row">
                <div className="learning-path-course-title" id="specialisation">Specialisations</div>
                <div className="learning-path-course-row-group">
                {SpecialisationOnAlgorithms.map((data, key) => {
                    return (
                      <div className="individual-course-items" data-aos="zoom-in" >
                        <div className="course-image">
                          <img src={data.courseThumbnail} alt="" />
                        </div>
                        <div className="learning-path-course-items">
                          <p className={`course-difficulty-level ${data.courseDifficultyColor} `}>{data.courseDifficulty}</p>
                          <p className="course-title">{data.courseTitle}</p>
                          <p className="course-mentor">
                            Mentor : {data.courseMentor}
                          </p>
                          <div className="explore-now">
                            <span className="course-rating">
                              {data.courseRatingStars} {data.courseRatingNumber}
                            </span>
                            <Link to={data.udemyLink}><img src={exploreNowImage} alt="" /></Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="learning-path-course fourth-row">
                <div className="learning-path-course-title" id="machine-learning">Machine Learning</div>
                <div className="learning-path-course-row-group">
                {
                 
                MachineLearningDataScience.map((data, key) => {
                    if(c===0){
                    c++;
                      return (
                      <div className="individual-course-items" data-aos="zoom-in" >
                        <div className="course-image">
                          <img src={data.courseThumbnail} alt="" />
                        </div>
                        <div className="learning-path-course-items">
                          <p className={`course-difficulty-level ${data.courseDifficultyColor} `}>{data.courseDifficulty}</p>
                          <p className="course-title">{data.courseTitle}</p>
                          <p className="course-mentor">
                            Mentor : {data.courseMentor}
                          </p>
                          <div className="explore-now">
                            <span className="course-rating">
                              {data.courseRatingStars} {data.courseRatingNumber}
                            </span>
                            <Link to={data.udemyLink}><img src={exploreNowImage} alt="" /></Link>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  else
                  {
                    return (
                      <div className="individual-course-items" data-aos="zoom-in" >
                        <div className="course-image">
                          <img src={data.courseThumbnail} alt="" />
                        </div>
                        <div className="learning-path-course-items">
                          <p className={`course-difficulty-level ${data.courseDifficultyColor} `}>{data.courseDifficulty}</p>
                          <p className="course-title">{data.courseTitle}</p>
                          <p className="course-mentor">
                            Mentor : {data.courseMentor}
                          </p>
                          <br />
                          <div className="explore-now">
                            <span className="course-rating">
                              {data.courseRatingStars} {data.courseRatingNumber}
                            </span>
                            {/* <Link to={data.udemyLink}><img src={exploreNowImage} alt="" /></Link> */}
                          </div>
                        </div>
                      </div>
                    );
                  }
                  })
                  }
                </div>
              </div>

              {/* <div className="learning-path-course fifth-row">
                <div className="learning-path-course-title" id="deep-learning">Deep Learning</div>
                <div className="learning-path-course-row-group">
                {DeepLearning.map((data, key) => {
                    return (
                      <div className="individual-course-items">
                        <div className="course-image">
                          <img src={data.courseThumbnail} alt="" />
                        </div>
                        <div className="learning-path-course-items">
                          <p className={`course-difficulty-level ${data.courseDifficultyColor} `}>{data.courseDifficulty}</p>
                          <p className="course-title">{data.courseTitle}</p>
                          <p className="course-mentor">
                            Mentor : {data.courseMentor}
                          </p>
                          <div className="explore-now">
                            <span className="course-rating">
                              {data.courseRatingStars} {data.courseRatingNumber}
                            </span>
                            <a href={data.udemyLink} target="_blank"><img src={exploreNowImage} alt="" /></a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div> */}

              <div className="learning-path-course sixth-row">
                <div className="learning-path-course-title" id="software-engineering">Software Engineering </div>
                <div className="learning-path-course-row-group">
                {SoftwareEngineeringAndOthers.map((data, key) => {
                    return (
                      <div className="individual-course-items" data-aos="zoom-in" >
                        <div className="course-image">
                          <img src={data.courseThumbnail} alt="" />
                        </div>
                        <div className="learning-path-course-items">
                          <p className={`course-difficulty-level ${data.courseDifficultyColor} `}>{data.courseDifficulty}</p>
                          <p className="course-title">{data.courseTitle}</p>
                          <p className="course-mentor">
                            Mentor : {data.courseMentor}
                          </p>
                          <div className="explore-now">
                            <span className="course-rating">
                              {data.courseRatingStars} {data.courseRatingNumber}
                            </span>
                            <Link to={data.udemyLink}><img src={exploreNowImage} alt="" /></Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPaths;
