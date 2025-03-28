import React, { useState } from 'react';
import './Calculadora.css';


const Calculadora = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleSumar = () => {
        const suma = parseFloat(num1) + parseFloat(num2);
        setResultado(suma);
    };

    const handleRestar = () => {
        const resta = parseFloat(num1) - parseFloat(num2);
        setResultado(resta);
    };

    const handleMultiplicar = () => {
        const multiplicacion = parseFloat(num1) * parseFloat(num2);
        setResultado(multiplicacion);
    };

    const handleDividir = () => {
        if (parseFloat(num2) !== 0) {
            const division = parseFloat(num1) / parseFloat(num2);
            setResultado(division);
        } else {
            setResultado("Error: División por cero");
        }
    };

    return (
        <div className="calculadora">
            <h1>calculadora</h1>
            <input
                type="number"
                placeholder="Número 1"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Número 2"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <button onClick={handleSumar}>sumar</button>
            <br />
            <button onClick={handleRestar}>restar</button>
            <br />
            <button onClick={handleMultiplicar}>multiplicar</button>
            <br />
            <button onClick={handleDividir}>dividir</button>
            <br />
            {resultado !== null && <p>respuesta: {resultado}</p>}
        </div>
    );
};

export default Calculadora;