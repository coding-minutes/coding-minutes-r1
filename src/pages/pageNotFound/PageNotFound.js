import React from 'react'
import { Link } from 'react-router-dom'

import './pageNotFound.css'

const PageNotFound = () => {
  return (
    <div className="page-not-found-container">
      <div className="pnf-internal">
        <h1>404</h1>
        <h2>Page Not Found</h2>
      </div>
      <button className="pnf"><Link to="/">Back to Homepage</Link></button>
    </div>
  )
}

export default PageNotFound