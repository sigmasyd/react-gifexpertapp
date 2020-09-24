import { useFetchGifs } from '../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';

describe('Pruebas en el hook useFetchGifs', () => {
  test('debe de retornar el estado inicial', async () => {
    const category = 'pokemon';
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    const { data, loading } = result.current;

    //const { data, loading } = useFetchGifs(category);
    //console.log(data, loading);

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
  test('debe de retornar areglo de imagenes y loading false', async () => {
    const category = 'pokemon';
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    await waitForNextUpdate();

    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
