import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../components/GifGrid';

// no es necesario porque se importa por defecto, pero para que visual studio code
// detecte y muestre el autocompletado de la ayuda
import '@testing-library/jest-dom';

import { useFetchGifs } from '../hooks/useFetchGifs';
jest.mock('../hooks/useFetchGifs');

describe('Pruebas sobre el componente <GifGrid />', () => {
  const category = 'sakura';

  test('debe mostrar el componente correctamente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostrar items cuando se cargan imagenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'https://asdasdas',
        title: 'Cualquier cosas',
      },
      {
        id: 'DEF',
        url: 'https://asdasdas',
        title: 'Cualquier cosa',
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    // sirve pero es mejor ser mas especificoo: en este caso evaluaremos
    // si se crea con el numero exacto de imagenes que se recibe....
    //expect(wrapper).toMatchSnapshot();

    // expect(wrapper).toMatchSnapshot();  // realizar pruebas en mas profuncidad
    // si las imagenes cargaron.. se esperaria que no exista ni un solo parrafo (solo hay
    // un parrafo que es donde caraga el loading)
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
