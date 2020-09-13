import React, { useState } from 'react';

export const AddCategory = () => {
  const [inputValue, setsInputValue] = useState('Hola Mundo');

  const handleInputChange = (e) => {
    //console.log(e.target.value);
    setsInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit hecho');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};
