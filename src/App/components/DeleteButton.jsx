import React from 'react';
import './DeleteButton.css';

export default function DeleteButton({ name, onClick }) {
  return (
    <button
      type="button"
      className="table__delete_category_button"
      name={name}
      onClick={onClick}
    >
            ✕
    </button>
  );
}

DeleteButton.