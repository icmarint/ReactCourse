import { getHeroeById } from '../../src/base-pruebas/08-imp-exp';
import { getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un héroe por ID', () => {
        const id = 1;
        const hero = getHeroeById( id );

        console.log(hero);

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    });

    test('getHeroeById debe retornar undefined si no existe el Id', () => {
        const id = 100;
        const hero = getHeroeById( id );

        console.log(hero);

        expect( hero ).toBeFalsy();
    });

    // Tarea:
    // Debe retornar un arreglo con los héroes de DC
    // Length === 3
    // toEqual al arreglo filtrado

    //debe retornar un arreglo con los héroes de Marvel
    // Length === 2

    test('getHeroesByOwner Debe retornar un arreglo con los héroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        console.log(heroes);

        expect(heroes.length).toEqual(3);

        //Otra forma (la ideal) es:

        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner))
    })

});