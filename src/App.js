import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario'
import Appointment from './components/Appointment'

function App() {

  //Appointments in localStorage
  let inicialAppointments = JSON.parse(localStorage.getItem('appointments'))
  if (!inicialAppointments) {
     inicialAppointments = []
  }

  //Array appointments
  const [appointments, saveAppointments] = useState(inicialAppointments)

  //Use effect when the state changes 
  useEffect(() => {
      let inicialAppointments = JSON.parse(localStorage.getItem('appointments'))

    if (inicialAppointments) {
      localStorage.setItem('appointments', JSON.stringify(appointments))
    } else {
      localStorage.setItem('appointments', JSON.stringify([]))
    }
    console.log(appointments)
  }, [appointments])

  //Function add Appointments
  const createAppointment = appointment => {
    saveAppointments([
      ...appointments,
      appointment
    ])
  }

  //Function eliminate appointment by id
  const eliminateAppointment = id => {
    const newAppointments = appointments.filter(appointment => appointment.id !== id)
    saveAppointments(newAppointments)
  }

  //Condicional message
  const title = appointments.length=== 0 ? 'No hay citas' : 'Administra tus citas'

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
            <h2>{title}</h2>
            {appointments.map(appointment => (
              <Appointment 
                key={appointment.id}
                appointment={appointment}
                eliminateAppointment={eliminateAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
