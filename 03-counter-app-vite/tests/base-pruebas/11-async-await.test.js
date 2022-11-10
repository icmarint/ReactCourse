import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await', () => {
    test('getImagen debe retornar un url de la imagen', async() => {
        
        const resp = await getImagen();
        expect( resp ).toBe('string');

    });
});