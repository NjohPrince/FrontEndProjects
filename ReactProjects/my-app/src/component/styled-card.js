import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

export default function StyledCard({ children, title, type }) {
  return (
    <div className={`alert-wrapper ${type}`}>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

