import { map } from "lodash";
import { Route } from "react-router-dom";
import useViews from "../../views";
import AnonymousRoute from "./AnonymousRoute";

export default function useAnonymousRoute() {
    /** Screens */
    const { useScreens } = useViews();
    const { Home, Habitacion1, Habitacion2, Habitacion3, Habitacion4, Habitacion5, Cocina, Jardin, Botiquin, Alianzas, Zonahcp } = useScreens();
    

    /** Variables */
    const routes = [
        {
            path: "/",
            exact: true,
            component: Home
        },
        {
            path: "/habitacion-1",
            exact: true,
            component: Habitacion1
        },
        {
            path: "/habitacion-2",
            exact: true,
            component: Habitacion2
        },
        {
            path: "/habitacion-3",
            exact: true,
            component: Habitacion3
        },
        {
            path: "/habitacion-4",
            exact: true,
            component: Habitacion4
        },
        {
            path: "/habitacion-5",
            exact: true,
            component: Habitacion5
        },
        {
            path: "/cocina",
            exact: true,
            component: Cocina
        },
        {
            path: "/jardin",
            exact: true,
            component: Jardin
        },
        {
            path: "/botiquin",
            exact: true,
            component: Botiquin
        },
        {
            path: "/alianzas",
            exact: true,
            component: Alianzas
        },
        {
            path: "/zonahcp",
            exact: true,
            component: Zonahcp
        }
    ];

    return map(routes, (item, index) => (
        <Route path={item.path} key={index} index={item.exact} element={<AnonymousRoute component={item.component}/>}/>
    ));
}