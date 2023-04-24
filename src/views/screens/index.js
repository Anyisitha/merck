import { lazy } from "react";

const Home = lazy(() => import('./Home'));
const Habitacion1 = lazy(() => import('./habitacion1'));
const Habitacion2 = lazy(() => import('./habitacion2'));
const Habitacion3 = lazy(() => import('./habitacion3'));
const Habitacion4 = lazy(() => import('./habitacion4'));
const Habitacion5 = lazy(() => import('./habitacion5'));
const Habitacion6 = lazy(() => import('./habitacion6'));
const Cocina = lazy(() => import('./cocina'));
const Jardin = lazy(() => import('./jardin'));
const Botiquin = lazy(() => import('./botiquin'));
const Alianzas = lazy(() => import('./alianzas'));
const Zonahcp = lazy(() => import('./zonahcp'));

const useScreens = () => {
    return {
        Home,
        Habitacion1,
        Habitacion2,
        Habitacion3,
        Habitacion4,
        Habitacion5,
        Habitacion6,
        Cocina,
        Jardin,
        Botiquin,
        Alianzas,   
        Zonahcp

    }
}

export default useScreens;