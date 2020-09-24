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

  test('debe de llamar el setCategories y limpiar la caja de texto', () => {
    //1. simular el inputChange
    const value = 'Jilou guorld';
    wrapper.find('input').simulate('change', { target: { value } });
    //expect(wrapper.find('p').text().trim()).toBe(value);
    //2. simular el submit
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    //3. setCategories se debe haber llamada
    //expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1); // llamar varias veces
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); // llamar con funcion como argumento
    //4. el valor del input debe estar ''
    //expect(wrapper.find('p').text().trim()).toBe('');
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
