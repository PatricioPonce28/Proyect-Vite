import React from 'react';

const Musica = () => {
    return (
        <div>
            <h2>Gustos Musicales Actuales</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <img 
                        src="/Imagenes1/Feid.jpg" 
                        alt="Artista 1" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Feid</p>
                </div>
                <div>
                    <img 
                        src="/Imagenes1/kl.jpg" 
                        alt="Artista 2" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Kendrick Lamar</p>
                </div>
            </div>
        </div>
    );
};

export default Musica;