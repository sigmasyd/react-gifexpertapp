import React from 'react';

export const GifGrid = ({ category }) => {
  const getGifs = async () => {
    try {
      const url =
        'https://api.giphy.com/v1/gifs/search?api_key=anyoG6FgTEQ3Fx2KywvgvcZGe1b9Bv1Y&q=Popeye&limit=10';
      const resp = await fetch(url);
      const { data } = await resp.json();

      const gifs = data.map((img) => {
        return {
          id: img.id,
          title: img.title,
          url: img.images?.downsized_medium.url,
        };
      });

      console.log(gifs);
    } catch (e) {
      console.log(e);
    }
  };
  getGifs();
  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
