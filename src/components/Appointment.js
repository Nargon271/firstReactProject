import React from 'react';
import PropTypes from 'prop-types'


const Appointment = ({appointment, eliminateAppointment}) => {
    return ( 
        <div className="cita">
            <p>Mascota: <span>{appointment.mascota}</span></p>
            <p>Dueño: <span>{appointment.propietario}</span></p>
            <p>Fecha: <span>{appointment.fecha}</span></p>
            <p>Hora: <span>{appointment.hora}</span></p>
            <p>Sintomas: <span>{appointment.sintomas}</span></p>

            <button
                className="button eliminar u-full-width"
                onClick={()=> eliminateAppointment(appointment.id)}
            >Eliminar &times;</button>
        </div>
     );
}

Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    eliminateAppointment: PropTypes.func.isRequired
}
 
export default Appointment;