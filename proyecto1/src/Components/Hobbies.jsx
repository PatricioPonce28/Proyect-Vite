import React from 'react';
// Usamos ../ para subir un nivel desde components hacia src
import imagenPiano from '../Piano.jpg';
import imagenPlay from '../Play.jpg';

const Hobbies = () => {
    return (
        <div>
            <h2>Hobbies</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <img 
                        src={imagenPiano}
                        alt="Piano" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Tocar el piano</p>
                </div>
                <div>
                    <img 
                        src={imagenPlay}
                        alt="Baloncesto" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Jugar Baloncesto</p>
                </div>
            </div>
        </div>
    );
};

export default Hobbies;