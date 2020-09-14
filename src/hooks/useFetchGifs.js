import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  // se usa use effect para evitar que cada vez que un estado cambie... se renderize todo
  useEffect(() => {
    setTimeout(() => {
      getGifs(category).then((imgs) =>
        setstate({
          data: imgs,
          loading: false,
        })
      );
    }, 3000);
  }, [category]);
  return state;
};
