import useLayout from "./layout";
import useScreens from "./screens";

const useViews = () => {
    return {
        useLayout,
        useScreens
    }
}

export default useViews;