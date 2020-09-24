import { useFetchGifs } from '../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';

describe('Pruebas en el hook useFetchGifs', () => {
  test('debe de retornar el estado inicial', () => {
    const category = 'pokemon';
    const { result } = renderHook(() => useFetchGifs(category));
    const { data, loading } = result.current;

    //const { data, loading } = useFetchGifs(category);
    //console.log(data, loading);

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
});
