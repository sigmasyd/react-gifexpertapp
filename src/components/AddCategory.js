import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setsInputValue] = useState('');

  const handleInputChange = (e) => {
    //console.log(e.target.value);
    setsInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit hecho');
    if (inputValue.trim().length > 2) {
      setCategories((cat) => [inputValue, ...cat]);
      setsInputValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
