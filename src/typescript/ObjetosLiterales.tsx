interface Persona{
    nombreCompreto: string;
    edad: number;
    direccion:Direccion;
}

interface Direccion{
    pais: string;
    casa:number;
}


export const ObjetosLiterales = () => {
    const Persona={
        nombreCompleto: 'Erick',
        edad: 23,
        direccion: {
            pais:'Mexico',
            casa:331
        }
    }

    return (
        <>
            <h3>Objetos literales</h3>
            <code>
                <pre>
                    {JSON.stringify(Persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
