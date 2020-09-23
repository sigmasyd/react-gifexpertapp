import React from 'react';
import '@testing-library/jest-dom'; // para tener la ayuda
import { shallow } from 'enzyme';
import { AddCategory } from '../components/AddCategory';

describe('Pruebas en el componente <AddCategory />', () => {
  //const setCategories = () => {};
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />); // se duplica solo para ver la ayuda

  // ciclo de vida de las pruebas
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';
    input.simulate('change', { target: { value } });
    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('No debe postear la informacion con submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });
});
