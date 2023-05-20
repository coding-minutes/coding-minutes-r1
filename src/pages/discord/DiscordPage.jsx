import React, { useEffect } from 'react'
import './discordPage.css'

const DiscordPage = () => {

  useEffect(() => {
    window.location.href= 'https://discord.gg/jwvtDtnkJv';
  }, []);

  return (
    <div className='join-discord-server-container'>
      Redirecting to the Discord Server...
    </div>
  )
}

export default DiscordPage