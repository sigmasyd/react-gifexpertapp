import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    //console.log(e.target.value);
    //console.log('Llamada a handleInputChange');
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit hecho', inputValue);
    if (inputValue.trim().length > 2) {
      setCategories((cat) => [inputValue, ...cat]);
      setInputValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
