import {useState} from 'react';
export const useCounter = () => {
    
    const [valor, setvalor] = useState(0);
    const acumular = (numero: number) =>{
        setvalor(valor + numero);
    }
    return {
        valor,
        acumular
    }
}
