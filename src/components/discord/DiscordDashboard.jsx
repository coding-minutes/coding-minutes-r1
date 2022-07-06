import React from "react";
import "./discordDashboard.css";

const DiscordDashboard = () => {
  return (
    // <div className="components-outer-container">
      <div className="discord-dashboard-container">
        <div className="discord-dashboard-internal-container" id="#discord-dashboard">
          <div className="discord-dashboard-title">Join our Discord Server  (15k+ members)</div>
          <iframe
            src="https://discord.com/widget?id=846128445662560276&theme=dark"
            width="350"
            height="500"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>

          <div className="join-our-server"><a href="https://discord.gg/jwvtDtnkJv">Join our Server</a></div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default DiscordDashboard;
