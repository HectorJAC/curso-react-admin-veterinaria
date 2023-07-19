/* eslint-disable react/prop-types */
import { MascotaEnferma } from "./MascotaEnferma";

export const ListaPacientes = ({listaPacientes, setMascotaEnferma, eliminarPaciente}) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {
                listaPacientes && listaPacientes.length ? (
                    <>
                        <h2 className="font-black text-3xl text-center">
                            Listado de Mascotas
                        </h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Administra tus
                            <span className="text-indigo-600 font-bold"> Pacientes y Citas </span>
                        </p>
                        {
                            listaPacientes.map((mascotaEnferma) => {
                                return (
                                    <MascotaEnferma
                                        key={mascotaEnferma.id} 
                                        mascotaEnferma={mascotaEnferma}
                                        setMascotaEnferma={setMascotaEnferma}
                                        eliminarPaciente={eliminarPaciente}
                                    />
                                )
                            })
                        }
                    </>
                ) : (
                    <>
                        <h2 className="font-black text-3xl text-center">
                            No hay Pacientes Agregados
                        </h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Comienza Agregando
                            <span className="text-indigo-600 font-bold"> un Nuevo Paciente </span>
                        </p>
                    </>
                )
            }
        </div>
    );
};