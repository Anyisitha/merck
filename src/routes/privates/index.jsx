import { map } from "lodash";
import { Route } from "react-router-dom";

export default function usePrivateRoutes() {
    /** Variables */
    const routes = [];

    return map(routes, (item, index) => (
        <Route path={item.path} index={item.exact} element={item.component}/>
    ));
}