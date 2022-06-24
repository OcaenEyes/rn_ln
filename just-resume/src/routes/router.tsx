import { useRoutes } from "react-router-dom";
import FrontEnd from "../front-end/layouts/index";
import AdminEnd from "../admin/layouts";
import ResumeAll from "../front-end/pages/resumes/resume-all-type";
import Resume01 from "../front-end/pages/resumes/resume-model-01";
import TestStyle from "../front-end/pages/test";

const ResumeRoutes = [
  {
    path: "",
    element: <ResumeAll />,
  },
  {
    path: "resume",
    element: <ResumeAll />,
  },
  {
    path: "resume01",
    element: <Resume01 />,
  },
];
const FrontRoutes = [
  {
    path: "*",
    children: [
      {
        path: "*",
        element: <FrontEnd />,
        children: ResumeRoutes,
      },
      {
        path: "index",
        element: <FrontEnd />,
        children: ResumeRoutes,
      },
      {
        path: "test",
        element: <TestStyle />,
      },
    ],
  },
];
const AdminRoutes = [
  {
    path: "*",
    element: <AdminEnd />,
  },
];

const GetFrontRoutes = () => {
  const routes = useRoutes(FrontRoutes);
  return routes;
};

const GetAdminRoutes = () => {
  const routes = useRoutes(AdminRoutes);
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
const CustomeRoutes = {
  ResumeRoutes,
  FrontRoutes,
  AdminRoutes,
  GetFrontRoutes,
  GetAdminRoutes,
  GetALLRoutes,
};
export default CustomeRoutes;
