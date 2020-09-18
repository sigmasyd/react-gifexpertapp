import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../components/GifGridItem';

const title = 'pokemon';
const url = 'https://image.com';
const wrapper = shallow(<GifGridItem title={title} url={url} />);

describe('Pruebas sobre el componente GifFridItem', () => {
  test('debe de mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de tener un parrafo con el title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });
  test('debe de tener la imagen igual al url y title de alt', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });
  test('debe de tener animate__fadeIn', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect(className.includes('animate__fadeIn')).toBe(true);
  });
});
