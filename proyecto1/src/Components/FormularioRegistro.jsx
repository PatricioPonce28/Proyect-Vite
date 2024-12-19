import React, { useState } from 'react';

const FormularioRegistro = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [materias, setMaterias] = useState([]);
    const [materia, setMateria] = useState('');
    const [fecha, setFecha] = useState('');
    const [mensaje, setMensaje] = useState('');

    const agregarMateria = () => {
        if (materia && fecha) {
            setMaterias([...materias, { materia, fecha }]);
            setMateria('');
            setFecha('');
        }
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        const resumenMaterias = materias
            .map((m, index) => `${index + 1}. ${m.materia} (Fecha: ${m.fecha})`)
            .join('\n');
        setMensaje(`Gracias, ${nombre}, por registrarte.\nMaterias cursadas:\n${resumenMaterias}`);
        setNombre('');
        setCorreo('');
        setMaterias([]);
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h2>Registro de Estudiante</h2>
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
                    <label htmlFor="correo">Correo electrónico:</label><br />
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
                    <label htmlFor="materias">Materias cursadas:</label><br />
                    <input
                        type="text"
                        id="materias"
                        value={materia}
                        placeholder="Nombre de la materia"
                        onChange={(e) => setMateria(e.target.value)}
                        style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                    />
                    <br />
                    <label htmlFor="fecha">Fecha de cursado:</label><br />
                    <input
                        type="date"
                        id="fecha"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                    />
                    <br />
                    <button
                        type="button"
                        onClick={agregarMateria}
                        style={{ padding: '10px 20px', background: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}
                    >
                        Agregar Materia
                    </button>
                </div>
                <button
                    type="submit"
                    style={{ padding: '10px 20px', background: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                >
                    Enviar
                </button>
            </form>
            {mensaje && (
                <div style={{ marginTop: '20px', padding: '10px', background: '#f0f0f0', borderRadius: '5px' }}>
                    <pre style={{ whiteSpace: 'pre-wrap' }}>{mensaje}</pre>
                </div>
            )}
        </div>
    );
};

export default FormularioRegistro;