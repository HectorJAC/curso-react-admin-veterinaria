import { useState, useEffect } from "react";

import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario";
import { ListaPacientes } from "./components/ListaPacientes";

const App = () => {
    const initialState = JSON.parse(localStorage.getItem('listaPacientes')) ?? [];

    const [listaPacientes, setListaPacientes] = useState(initialState);

    const [mascotaEnferma, setMascotaEnferma] = useState({});

    useEffect(() => {
        localStorage.setItem('listaPacientes', JSON.stringify(listaPacientes));
    }, [listaPacientes]);

    const eliminarPaciente = (id) => {
        const nuevaListaPacientes = listaPacientes.filter((paciente) => {
            return (
                paciente.id !== id
            )
        });
        setListaPacientes(nuevaListaPacientes);
    }

    return (
        <div className="container mx-auto mt-18">
            <Header />

            <div className="mt-12 md:flex">
                <Formulario 
                    listaPacientes={listaPacientes}
                    setListaPacientes={setListaPacientes}
                    mascotaEnferma={mascotaEnferma}
                    setMascotaEnferma={setMascotaEnferma}
                />

                <ListaPacientes 
                    listaPacientes={listaPacientes}
                    setMascotaEnferma={setMascotaEnferma}
                    eliminarPaciente={eliminarPaciente}
                />
            </div>
        </div>
    );
};

export default App;