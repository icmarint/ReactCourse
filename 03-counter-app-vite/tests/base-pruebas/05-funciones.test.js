import { getUser } from '../../src/base-pruebas/05-funciones';
import { getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        console.log(user);

        expect( testUser ).toEqual( user );
    });


    //La siguiente fue una tarea:
    test('getUsuarioActivo debe retornar un objeto', () => { 
        
        const nombre = 'Isabel'
        const testActive = {
            uid: 'ABC567',
            username: nombre
        }

        const active = getUsuarioActivo('Isabel')

        expect( testActive ).toEqual( active );
    });

});