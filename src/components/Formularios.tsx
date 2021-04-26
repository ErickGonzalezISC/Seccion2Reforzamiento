import { useState } from "react";

export const Formularios = () => {
    const [formulario, setFormulario] = useState({
        email:'erick@gmail.com',
        password:'167253'
    });
    const onChange =(value: string, campo: string)=>{
        setFormulario({
            ...formulario,
            [campo]:value
        });
    }
    return (
        <>
            <h3>Formularios</h3>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Email"
                onChange={({target})=>onChange(target.value,'email')}
            />
            <input 
                type="text" 
                className="form-control" 
                placeholder="Password"
                onChange={({target})=>onChange(target.value,'password')}
            />
            <code>
                <pre>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </code>
        </>
    )
}
