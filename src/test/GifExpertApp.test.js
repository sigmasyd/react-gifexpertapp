import React from 'react';
const { shallow } = require('enzyme');
const { GifExpertApp } = require('../GifExpertApp');

describe('Se realizan pruebas sobre el componente principal GifExpertApp', () => {
  test('debe generarse correctamente el componente <GifExpertApp />', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de mostrar una lista de categorias', () => {
    // actualmente no hay forma de evaluar el useState, por lo que
    // se recurre a una categoria por defecto lo cual es valido para las pruebas
    // -------->
    // si tengo dos elementos en la categoria por default, deberia
    // de tener dos elementos GifGrid, es decir:
    // tantos elementos GifGrid's como categorias tenga
    const categories = ['Saint Seiya', 'Transformer'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
