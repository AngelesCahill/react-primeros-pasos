import '../styles/header.css';
import { useState } from 'react';

export const Header = () => {

    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

    return (
        <div className="container">
            <h1>Usando hook useState - Header</h1>
            <h2 id="marca">La tarea esta {isOn ? 'Terminada' : 'Pendiente'}</h2>
            <button className='btn-tarea' onClick={toggleSwitch}>Cambiar estado de la tarea</button>
      </div>
    );
}

