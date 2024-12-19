import React from 'react';

const Deportes = () => {
    return (
        <div>
            <h2>Galería de Deportes Favoritos</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <img 
                        src="/Imagenes1/images.jpg" 
                        alt="Deporte 1" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Fútbol</p>
                </div>
                <div>
                    <img 
                        src="/Imagenes1/Baloncesto.jpg" 
                        alt="Deporte 2" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Baloncesto</p>
                </div>
                <div>
                    <img 
                        src="/Imagenes1/mma.jpg" 
                        alt="Deporte 3" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>MMA</p>
                </div>
                <div>
                    <img 
                        src="/Imagenes1/Ecuavolley.jpg" 
                        alt="Deporte 4" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Ecuavolley</p>
                </div>
            </div>
        </div>
    );
};

export default Deportes;