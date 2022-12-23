import useViews from "../../views";

export default function PrivateRoute({ layout, layoutProps, component }){
    /** Layout */
    const {useLayout} = useViews();
    const { GeneralLayout } = useLayout();
    
    /** Variables */
    const Layout = layout || GeneralLayout;
    const Component = component;

    return (
        <Layout {...layoutProps}>
            <Component/>
        </Layout>
    )
}