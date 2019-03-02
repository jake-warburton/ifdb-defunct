import React from 'react'

import './style.css'

const BasicHeader = ({ children }) => (
  <div className="container-fluid p-0 d-flex flex-column basic-header">
    {children}
  </div>
)

export default BasicHeader
