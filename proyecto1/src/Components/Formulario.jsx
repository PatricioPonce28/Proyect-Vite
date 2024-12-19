import React, { useState } from 'react';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [comentarios, setComentarios] = useState('');
    const [mensaje, setMensaje] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault();
        setMensaje(`Gracias, ${nombre.toUpperCase()}, por registrar tus comentarios ¡Te contactaremos pronto!`);
        setNombre('');
        setCorreo('');
        setComentarios('');
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h2>Formulario de Comentarios</h2>
            <form onSubmit={manejarEnvio}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="nombre">Nombre:</label><br />
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="correo">Correo:</label><br />
                    <input
                        type="email"
                        id="correo"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                        style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="comentarios">Comentarios:</label><br />
                    <textarea
                        id="comentarios"
                        value={comentarios}
                        onChange={(e) => setComentarios(e.target.value)}
                        required
                        style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                    ></textarea>
                </div>
                <button type="submit" style={{ padding: '10px 20px', background: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Enviar
                </button>
            </form>
            {mensaje && (
                <p style={{ marginTop: '20px', color: 'black', fontWeight: 'bold' }}>
                    {mensaje}
                </p>
            )}
        </div>
    );
};

export default Formulario;