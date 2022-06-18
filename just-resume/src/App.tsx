import { BrowserRouter } from "react-router-dom";
import routes from "./routes/router";
const App = () => {
  return (
    <BrowserRouter>
      <routes.GetALLRoutes />
    </BrowserRouter>
  );
};

export default App;
