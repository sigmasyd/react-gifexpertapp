import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  // se usa use effect para evitar que cada vez que un estado cambie... se renderize todo
  useEffect(() => {
    getGifs(category).then((imgs) =>
      setstate({
        data: imgs,
        loading: false,
      })
    );
  }, [category]);
  return state;
};
