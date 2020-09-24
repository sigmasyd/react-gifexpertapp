import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../components/GifGrid';
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
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
});
