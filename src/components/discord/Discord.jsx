import React from "react";
import "./discord.css";
import discordLogo from "../../assets/Images/main/discord.svg";
import { Helmet } from 'react-helmet';

const Discord = () => {
  return (

<Helmet>
<meta http-equiv="refresh" content="0; url=https://discord.gg/jwvtDtnkJv"/>
</Helmet>
    // <div className="discord-container">
    //   <div className="discord-logo">
    //     <img src={discordLogo} alt="" />
    //   </div>

    //   <div className="join-discord">
    //     <span>
    //       <a href="https://discord.gg/jwvtDtnkJv" target="_blank">
    //         Join Our Discord Server
    //       </a>
    //     </span>
    //   </div>
    // </div>
  );
};

export default Discord;
