import React from 'react';
import InfoPersonal from './Components/InfoPersonal';
import Estudios from './Components/Estudios';
import Herramientas from './Components/Herramientas';
import Deportes from './Components/Deportes';
import Musica from './Components/Musica';
import Hobbies from './Components/Hobbies';
import Formulario from './Components/Formulario';
import FormularioRegistro from './Components/FormularioRegistro';


const App = () => {
  return (
      <div style={{ 
          background: 'linear-gradient(135deg, #ff9966, #ff5e62)',
          padding: '20px', 
          minHeight: '100vh' 
      }}>
          <InfoPersonal />
          <Estudios />
          <Herramientas />
          <Deportes />
          <Musica />
          <Hobbies />
        <div>
          <h1>Opción 1: Comentarios</h1>
          <Formulario />
        </div>
        <div>
          <h1>Opción 2: Comentarios</h1>
          <FormularioRegistro />
        </div>
      </div>
  );
};

export default App;