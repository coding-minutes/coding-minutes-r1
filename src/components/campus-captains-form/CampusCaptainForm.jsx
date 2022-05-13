import React, { useEffect } from "react";
import "./campusCaptainForm.css";
import campusCaptainImage from "./campus-captains.svg";
import submitButton from "./submit.svg";

const ReactContact = () => {
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    branch: "",
    gyear: "",
    country: "",
    state: "",
    linkprofile: "",
    githubprofile: "",
    message: "",
  });
  let name, value;
  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  const postData = async (e) => {
    e.preventDefault();
    const {
      name,
      email,
      phone,
      college,
      branch,
      gyear,
      country,
      state,
      linkprofile,
      githubprofile,
      message,
    } = user;
    if (name && email && phone) {
      if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(user.email)) {
        const response = await fetch(
          "https://campus-captains--form-default-rtdb.firebaseio.com/CampusCaptainForm.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              phone,
              college,
              branch,
              gyear,
              country,
              state,
              linkprofile,
              githubprofile,
              message,
            }),
          }
        );
        if (response) {
          setUser({
            name: "",
            email: "",
            phone: "",
            college: "",
            branch: "",
            gyear: "",
            country: "",
            state: "",
            linkprofile: "",
            githubprofile: "",
            message: "",
          });
          alert("Thank you for filling the form, Expect a call shortly from us!");
        }
      } else {
        alert("Please Fill All The Fields");
      }
    } else {
      alert("Enter a valid email");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section id="contact">
        <div className="contact-box">
          <div className="contact-links">
            <h3>Welcome to</h3>
            <h2 className="Downshift">Coding Minutes Family 🥳</h2>
            <img src={campusCaptainImage} alt="" />
            {/* <div className="links">
              <div className="link">
                <a><img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" /></a>
              </div>
              <div className="link">
                <a><img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" /></a>
              </div>
              <div className="link">
                <a><img src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen" /></a>
              </div>
              <div className="link">
                <a><img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" /></a>
              </div>
            </div> */}
          </div>
          <div className="contact-form-wrapper">
            <div className="campus-captain-form">
              <h3>Please Fill out these Details</h3>
              <form method="POST">
                <div className="form-item">
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="off"
                    value={user.name}
                    onChange={getUserData}
                    placeholder="Name"
                    
                  />
                  <label>Name:</label>
                </div>
                <div className="form-item">
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={getUserData}
                    placeholder="Email"
                  />
                  <label>Email:</label>
                </div>
                <div className="form-item">
                  <input
                    type="text"
                    name="phone"
                    required
                    autoComplete="off"
                    value={user.phone}
                    onChange={getUserData}
                    placeholder="PhoneNumber"
                  />
                  <label>Phone:</label>
                </div>
                <div className="form-item">
                  <input
                    type="text"
                    name="college"
                    required
                    autoComplete="off"
                    value={user.college}
                    onChange={getUserData}
                    placeholder="College Name"
                  />
                  <label>College Name:</label>
                </div>
                <div className="form-item">
                  <input
                    type="text"
                    name="branch"
                    required
                    autoComplete="off"
                    value={user.branch}
                    onChange={getUserData}
                    placeholder="Branch Name"
                  />
                  <label>Branch:</label>
                </div>
                <div className="form-item">
                  <input
                    type="text"
                    name="gyear"
                    required
                    autoComplete="off"
                    value={user.gyear}
                    onChange={getUserData}
                    placeholder="Graduation Year"
                  />
                  <label>Graduation Year:</label>
                </div>
                <div className="form-item">
                  <input
                    type="text"
                    name="country"
                    required
                    autoComplete="off"
                    value={user.country}
                    onChange={getUserData}
                    placeholder="Country"
                  />
                  <label>Country:</label>
                </div>
                <div className="form-item">
                  <input
                    type="text"
                    name="state"
                    required
                    autoComplete="off"
                    value={user.state}
                    onChange={getUserData}
                    placeholder="State"
                  />
                  <label>State:</label>
                </div>
                <div className="form-item">
                  <input
                    type="text"
                    name="linkprofile"
                    required
                    autoComplete="off"
                    value={user.linkprofile}
                    onChange={getUserData}
                    placeholder="Linkedin Profile URL"
                  />
                  <label>LinkedIn Profile:</label>
                </div>
                <div className="form-item">
                  <input
                    type="text"
                    name="githubprofile"
                    required
                    autoComplete="off"
                    value={user.githubprofile}
                    onChange={getUserData}
                    placeholder="Github Profile URL"
                  />
                  <label>Github Profile:</label>
                </div>
                <div className="form-item">
                  <textarea
                    className=""
                    name="message"
                    required
                    autoComplete="off"
                    value={user.message}
                    onChange={getUserData}
                    placeholder="Message"
                  ></textarea>
                  <label>Message:</label>
                </div>
                <div className="submit-btn" onClick={postData}>
                  <img src={submitButton} alt="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReactContact;
