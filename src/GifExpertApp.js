import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState([
    'One Punch',
    'Samurai X',
    'Dragon Ball',
  ]);

  /*  const handleAdd = () => {
    //setCategories(['Saint Seiya', ...categories]); // ambas formas sirven
    setCategories((cats) => ['Saint Seiya', ...cats]);
  };*/

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
//<button onClick={handleAdd}>Agregar</button>
