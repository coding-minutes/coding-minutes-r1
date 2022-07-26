import React from "react";
import "./newsletter.css";

const Newsletter = () => {
  const [user, setUser] = React.useState({
    name: "",
    email: "",
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
    const {name,email} = user;


    if (name&&email&&(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(user.email))) {
      const response = await fetch(
        "https://campus-captains-form-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email
          }),
        }

      );

      if (response) {
        setUser({
          name: "",
          email: ""
        });
        alert("Thanks for Subscribing!");
      }
      else {
        alert("Please fill all the Fields");
      }
    } 
    else 
    {
      alert("Please enter a valid Email");
    }
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div class="newsletter" data-aos="fade-up" id="sign-up">
      <p>
        Hey Coder! <br/> <br/> Subscribe to our newsletter to never miss any updates about new course launch, discounts, blogs, giveaways and hiring opportunities!  
      </p>
      <form method="POST">
        <div class="text">
          <div className="wrapinputs">
          <input
            type="name"
            placeholder="Enter Your Name"
            name="name"
            autoComplete="on"
            value={user.name}
            onChange={getUserData}
            required
            className="newsletter-input"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            autoComplete="on"
            value={user.email}
            onChange={getUserData}
            required
            className="newsletter-input"
          />
          </div>
          <button onClick={postData}>
            {/* <AiOutlineArrowRight style={{ paddingTop: "3px" }} /> */}
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
