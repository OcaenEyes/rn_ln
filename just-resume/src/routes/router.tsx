import { useRoutes, BrowserRouter } from "react-router-dom";
import FronEnd from "../front-end/layouts/index";
import Resume01 from "../front-end/pages/resume-model-01";

const GetFrontRoutes = () => {
  const routes = useRoutes([
    {
      path: "",
      element: <FronEnd />,
      children: [
        {
          path: "resume01",
          element: <Resume01 />,
        },
      ],
    },
  ]);
  return routes;
};

const GetAdminRoutes = () => {
  const routes = useRoutes([
    {
      path: "",

      children: [
        {
          path: "",
          element: <FronEnd />,
        },
        {
          path: "resume01",
          element: <Resume01 />,
        },
      ],
    },
  ]);
  return routes;
};

const GetALLRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <GetFrontRoutes />,
    },
    {
      path: "/admin",
      element: <GetAdminRoutes />,
    },
  ]);
  return routes;
};

const SetRoutes = () => {
  return (
    <BrowserRouter>
      <GetALLRoutes />
    </BrowserRouter>
  );
};

export default SetRoutes;
