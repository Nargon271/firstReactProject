import React, {useState} from 'react';
import Formulario from './components/Formulario'


function App() {

  //Array appointments
  const [appointments, saveAppointments] = useState([])

  //Function add Appointments
  const createAppointment = appointment => {
    saveAppointments([
      ...appointments,
      appointment
    ])
  }

  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              createAppointment={createAppointment}
            />
          </div>
          <div className="one-half column">
            2
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
