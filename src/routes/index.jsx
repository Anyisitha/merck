import { map } from "lodash";
import { BrowserRouter, Routes } from "react-router-dom";
import usePrivateRoutes from "./privates";
import useAnonymousRoutes from "./anonymous";

export default function useRouter(){
    /** Variables */
    const privateRoutes = usePrivateRoutes();
    const anonymousRoutes = useAnonymousRoutes();
    const resultRoutes = [...privateRoutes, ...anonymousRoutes];

    return (
        <BrowserRouter>
            <Routes>
                {map(resultRoutes)}
            </Routes>
        </BrowserRouter>
    )
}