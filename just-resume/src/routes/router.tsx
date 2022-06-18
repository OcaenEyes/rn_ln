import { useRoutes } from "react-router-dom";
import FrontEnd from "../front-end/layouts/index";
import AdminEnd from "../admin/layouts";
import Resume01 from "../front-end/pages/resume-model-01";

const GetFrontRoutes = () => {
  const routes = useRoutes([
    {
      path: "",
      children: [
        { path: "", element: <FrontEnd /> },
        { path: "index", element: <FrontEnd /> },
      ],
    },
    {
      path: "resume01",
      element: <Resume01 />,
    },
  ]);
  return routes;
};

const GetAdminRoutes = () => {
  const routes = useRoutes([
    {
      path: "",
      element: <AdminEnd />,
    },
  ]);
  return routes;
};

const GetALLRoutes = () => {
  const routes = useRoutes([
    {
      path: "/*",
      element: <GetFrontRoutes />,
    },
    {
      path: "/admin/*",
      element: <GetAdminRoutes />,
    },
  ]);
  return routes;
};

export default GetALLRoutes;
