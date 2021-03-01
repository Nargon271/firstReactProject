import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'


const Formulario = ({createAppointment}) => {

    //crear el state de citas
    const [appointment, updateAppointment] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas:''
    })

    const [error,errorHandling ] = useState (false)

    //function executed when the user types in an input
    const handleChange = e => {
        updateAppointment({
            ...appointment,
            [e.target.name] : e.target.value
        })
    }

    const {mascota, propietario, fecha, hora, sintomas} = appointment

    //function to send Form
    const submitAppointment = e => {
        e.preventDefault()
        console.log(mascota)
        //Validate
        if (mascota.trim() === "" || propietario.trim() ==="" || fecha.trim() ==="" || hora.trim() ===""|| sintomas.trim() ==="") {
            errorHandling(true)
            return
        }

        //Eliminate previos message
        errorHandling(false)

        //Asign ID
        appointment.id =uuid()
        console.log(appointment)
        
        //Create Appointment
        createAppointment(appointment)

        //Reset Form
        updateAppointment({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })

    }


    return (
        <>
            <h2>Crear cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={submitAppointment}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={handleChange}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </>
      );
}
 
export default Formulario
