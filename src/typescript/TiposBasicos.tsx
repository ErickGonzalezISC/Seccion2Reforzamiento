
export const TiposBasicos = () => {
    const nombre: string = 'Erick';
    const edad: number = 1234;
    const estaActivo: boolean = false;

    const poderes = ['velocidad', 'volar', 'respirar en el agua'];
    return (
        <>
            <h3>Indtroduccion a TS -React</h3>
            {nombre}, {edad}, {(estaActivo) ? 'activo': 'no activo'}
            <hr/>
            {poderes.join(', ')}
        </>
    )
}
