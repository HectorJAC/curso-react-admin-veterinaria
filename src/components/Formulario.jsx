/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import { Error } from "./Error";

export const Formulario = ({listaPacientes, setListaPacientes, mascotaEnferma, setMascotaEnferma}) => {
    // Estados para controlar lo escrito en cada input
    const [nombre, setNombre] = useState('');
    const [animal, setAnimal] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    // Estado para controlar cuando se muestra el error
    const [error, setError] = useState(false);

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);
        return random + fecha
    }

    useEffect(() => {
        if (Object.keys(mascotaEnferma).length > 0) {
            setNombre(mascotaEnferma.nombre);
            setAnimal(mascotaEnferma.animal);
            setPropietario(mascotaEnferma.propietario);
            setEmail(mascotaEnferma.email);
            setFecha(mascotaEnferma.fecha);
            setSintomas(mascotaEnferma.sintomas);
        }
    }, [mascotaEnferma]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar formulario
        if ([nombre, animal, propietario, email, fecha, sintomas].includes('')) {
            setError(true);
            return;
        }
        setError(false);

        // Objeto con la mascota registrada
        const objetoMascota = {
            nombre,
            animal,
            propietario,
            email,
            fecha,
            sintomas
        };

        if (mascotaEnferma.id) {
            // Editar la mascota agregada anteriormente
            objetoMascota.id = mascotaEnferma.id;

            const mascotaEnfermaActualizada = listaPacientes.map((mascota) => {
                return (
                    mascota.id === mascotaEnferma.id ? objetoMascota : mascota
                )
            });

            setListaPacientes(mascotaEnfermaActualizada);
            setMascotaEnferma({});
        } else {
            objetoMascota.id = generarId();
            setListaPacientes([...listaPacientes, objetoMascota]);
        }

        // Reiniciar el formulario
        setNombre('');
        setAnimal('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    };

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className=" font-black text-3xl text-center">
                Agregar Pacientes
            </h2>
            <p className="text-lg mt-5 text-center mb-10">
                Agrega Pacientes y 
                <span className="text-indigo-600 font-bold"> Administralos </span>
            </p>

            <form
                className="bg-slate-400 shadow-md rounded-lg py-10 px-5 mb-5"
                onSubmit={handleSubmit}
            >

                { error && <Error /> }

                <div className="mb-5">
                    <label
                        htmlFor="nombre"
                        className="block text-gray-700 uppeercase font-bold"
                    >
                        Nombre Mascota
                    </label>
                    <input 
                        id="nombre"
                        type="text"
                        className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
                        placeholder="Nombre de la Mascota"
                        autoComplete="off"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label 
                        htmlFor="animal"
                        className="block text-gray-700 uppeercase font-bold"
                    >
                        Animal
                    </label>
                    <select  
                        id="animal"
                        className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
                        value={animal}
                        onChange={(e) => setAnimal(e.target.value)}
                    >
                        <option value=""> Que animal es la mascota? </option>
                        <option value="Perro"> Perro </option>
                        <option value="Gato"> Gato </option>
                        <option value="Loro"> Loro </option>
                        <option value="Cotorra"> Cotorra </option>
                        <option value="Perico"> Perico </option>
                    </select>
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="propietario"
                        className="block text-gray-700 uppeercase font-bold"
                    >
                        Nombre Propietario
                    </label>
                    <input 
                        id="propietario"
                        type="text"
                        className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
                        placeholder="Nombre del Propietario"
                        autoComplete="off"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 uppeercase font-bold"
                    >
                        Email Propietario
                    </label>
                    <input 
                        id="email"
                        type="email"
                        className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
                        placeholder="Email del Propietario"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="fecha"
                        className="block text-gray-700 uppeercase font-bold"
                    >
                        Fecha Alta
                    </label>
                    <input 
                        id="fecha"
                        type="date"
                        className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
                        autoComplete="off"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="sintomas"
                        className="block text-gray-700 uppeercase font-bold"
                    >
                        Sintomas de la Mascota
                    </label>
                    <textarea 
                        id="sintomas"
                        type="text"
                        className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
                        placeholder="Sintomas de la Mascota"
                        autoComplete="off"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input 
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 rounded-md cursor-pointer transition-all duration-300 ease-in-out"
                    value={mascotaEnferma.id ? "Guardar Cambio" : "Agregar Paciente"}
                />
            </form>
        </div>
    );
};