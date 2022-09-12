import React from "react";
import "./discordDashboard.css";
import discord from "../../assets/Images/main/Discord-Log.png";
const DiscordDashboard = () => {
  return (

    //   <div className="discord-dashboard-container">
    //     <div className="discord-dashboard-internal-container" id="#discord-dashboard">
    //       <div className="discord-dashboard-title">Join our Discord Server  (15k+ members)</div>
    //       <iframe
    //         src="https://discord.com/widget?id=846128445662560276&theme=dark"
    //         width="350"
    //         height="500"
    //         allowtransparency="true"
    //         frameborder="0"
    //         sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    //       ></iframe>

    //       <div className="join-our-server"><a href="https://discord.gg/jwvtDtnkJv">Join our Server</a></div>
    //     </div>
    // </div>
    <div className="components-outer-container" id="blogss">
      <div className="blogs-outer-container" data-aos="fade-up" >
        <div className="blogs-inner-container" style={{ background: `var(--discord-bg)` }}>
          <div className="blogs-left">
            <h1>Join Our Discord Server!</h1>
            <p>
              Be a part of the fastest growing Coding Community, with over 15000 members. CODE, JAM, PLAY with your peers and win SWAGS, Cash Rewards and Free Courses.
            </p>
            <div className="blog-explore">
              <a href="https://discord.gg/jwvtDtnkJv">Join Server</a>
            </div>

          </div>
          <div className="blogs-right">
            <div className="right-image1">
              <img loading="lazy" style={{ width: '550px', height: '415px' }} src={discord} alt="" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscordDashboard;
