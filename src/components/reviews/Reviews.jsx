import React from "react";
import "./reviews.css";
import reviewSampleProfile from '../../assets/Images/main/review-sample-profile.svg'
import allTheBestImage from '../../assets/Images/main/all-the-best-image.svg';

const Reviews = () => {
  return (
    <div className="components-outer-container">
      <div className="reviews-outer-container">
        <div className="reviews-inner-container">
          <div className="reviews-title">
            Loved by students across the world ❤️{" "}
          </div>
          <div className="inside-reviews">
            <div className="first-review review-items">
              <p className="review-h4">500+</p>
              <p className="review-h6">Colleges covered</p>
            </div>
            <div className="second-review review-items">
              <div className="seconds-first">
                <p className="review-h4">4.7 (10K ratings)</p>
                <p className="review-h6">Average Rating</p>
              </div>
              <div className="seconds-second">
                <p>⭐</p>
              </div>
            </div>
            <div className="third-review review-items">
              <div className="thirds-first profile-image">
                <img src={reviewSampleProfile} alt="" />
              </div>
              <div className="thirds-second">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tempore aperiam quasi recusandae. Labore, impedit incidunt molestiae laborum facere eaque voluptates. Fuga ipsa tempore enim, officia quisquam nobis deserunt sed quae. Asperiores, qui. Dolorum quod necessitatibus neque, vel sapiente voluptatem repellat dolores autem fugiat rem numquam reprehenderit non iusto deleniti.</p>
                <span>Chaitanya Ankam</span>
              </div>
             
            </div>
            <div className="fourth-review review-items">
                <div className="fourths-first profile-image">
                  <img src={reviewSampleProfile} alt="" />
                </div>
                <div className="fourths-second">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus temporibus cum officiis laboriosam magni voluptas voluptatum odit? Ab impedit ipsa placeat minus aliquid, quasi nulla, blanditiis ratione incidunt, aperiam rerum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, soluta.
                </div>
              </div>
              <div className="fifth-review review-items">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam repudiandae ratione, libero sunt nulla inventore.</p>
                <span>Onkar Sawarna</span>
              </div>
              <div className="sixth-review review-items">
                <p className="review-h4">50+</p>
                <p className="review-h6">Countries covered</p>
              </div>
              <div className="seventh-review review-items">
                <div className="sevenths-first">
                  <p className="review-h4">60,000+</p>
                  <p className="review-h6">Students taught</p>
                </div>
                <div className="sevenths-second ">
                  <img src={allTheBestImage} alt="" />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
