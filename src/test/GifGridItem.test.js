import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../components/GifGridItem';

describe('Pruebas sobre el componente GifFridItem', () => {
  test('debe de mostrar el componente correctamente', () => {
    const title = 'pokemon';
    const url = 'https://image.com';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    expect(wrapper).toMatchSnapshot();
  });
});
