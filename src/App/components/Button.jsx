/* eslint-disable react/button-has-type */
import React from 'react';
import './Button.css';

export default function Button(props) {
  const {
    children, onClick, name, disabled, type, color,
  } = props;
  let className = 'btn';
  if (color === 'reject') {
    className += ' btn__reject';
  } else if (color === 'accept') {
    className += ' btn__accept';
  }

  return (
    <button
      className={className}
      name={name}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
