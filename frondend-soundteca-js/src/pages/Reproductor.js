import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import APIInvoke from "../utils/APIInvoke";

const Reproductor = () => {
    const [canciones, setCanciones] = useState([]);
    const [cancionActual, setCancionActual] = useState({})
    const location = useLocation();

    const cargarCanciones = async (pagina, cantidad) => {
        const response = await APIInvoke.invokeGET(`/listarCancion`);
        setCanciones(response.data)
    }

    const getData = () => {
        const searchParams = new URLSearchParams(location.search);
        const cancionActual = searchParams.get('cancionActual');

    }

    useEffect(() => {
        cargarCanciones();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (cancionActual) {
            getData();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div className="w-100" style={{ backgroundImage: `url(${cancionActual['portada']})`, height: '100%', position: 'absolute' }}>
            {cancionActual.portada}
        </div>
    )
}

export default Reproductor;