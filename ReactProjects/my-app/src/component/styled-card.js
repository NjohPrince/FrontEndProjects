import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

export default function StyledCard({ children, title, type }) {
  return (
    <div className={`card-component ${type}`}>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

StyledCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element), 
    PropTypes.element.isRequired
  ]),
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}