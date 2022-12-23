import { Fragment } from "react";
import useRouter from "./routes"

export default function App(){
    /** Variables */
    const Router = useRouter();

    return (
        <Fragment>
            {Router}
        </Fragment>
    )
}