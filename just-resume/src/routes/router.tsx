import { useRoutes, BrowserRouter } from "react-router-dom";
import FronEnd from '../front-end/layouts/index';


const GetFrontRoutes = () => {
    const routes = useRoutes([
        {
            path: '',
            element: <FronEnd />
        }
    ]);
    return routes;
}

const GetALLRoutes = () => {
    const routes = useRoutes([
        {
            path: '/*',
            element: <GetFrontRoutes />
        },
    ]);
    return routes;
}

const SetRoutes = () => {
    return (
        <BrowserRouter>
            <GetALLRoutes />
        </BrowserRouter>
    );
}

export default SetRoutes;