import React from 'react';

export const GifGridItem = ({ title, url }) => {
  console.log(title, url);
  return (
    <>
      <img src={url} alt={title} />
      <p>{title}</p>
    </>
  );
};
