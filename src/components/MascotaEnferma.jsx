/* eslint-disable react/prop-types */
export const MascotaEnferma = ({mascotaEnferma, setMascotaEnferma, eliminarPaciente}) => {
    
    const { nombre, animal, propietario, email, fecha, sintomas } = mascotaEnferma;

    const handleEliminar = () => {
        const respuesta = confirm('¿Estás seguro de eliminar este registro?');

        if (respuesta) {
            eliminarPaciente(mascotaEnferma.id);
        }
    };

    return (
        <div className="m-5 bg-slate-400 shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-5 text-gray-700 uppercase">
                Nombre Mascota:
                <input 
                    className="border-2 w-full p-2 rounded-md font-normal normal-case"
                    value={nombre}
                    disabled
                />
            </p>

            <p className="font-bold mb-5 text-gray-700 uppercase">
                Animal:
                <input 
                    className="border-2 w-full p-2 rounded-md font-normal normal-case"
                    value={animal}
                    disabled
                />
            </p>

            <p className="font-bold mb-5 text-gray-700 uppercase">
                Nombre Propietario:
                <input 
                    className="border-2 w-full p-2 rounded-md font-normal normal-case"
                    value={propietario}
                    disabled
                />
            </p>

            <p className="font-bold mb-5 text-gray-700 uppercase">
                Email Propietario:
                <input 
                    className="border-2 w-full p-2 rounded-md font-normal normal-case"
                    value={email}
                    disabled
                />
            </p>

            <p className="font-bold mb-5 text-gray-700 uppercase">
                Fecha de Alta:
                <input 
                    className="border-2 w-full p-2 rounded-md font-normal normal-case"
                    value={fecha}
                    disabled
                />
            </p>

            <p className="font-bold mb-5 text-gray-700 uppercase">
                Sintomas Mascota:
                <input 
                    className="border-2 w-full p-2 rounded-md font-normal normal-case"
                    value={sintomas}
                    disabled
                />
            </p>

            <div className="flex justify-between mt-10">
                <button
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg shadow-md"
                    onClick={() => setMascotaEnferma(mascotaEnferma)}
                >
                    Editar
                </button>

                <button
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg shadow-md"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};