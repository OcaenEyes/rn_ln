import { BrowserRouter } from "react-router-dom";
import GetALLRoutes from "./routes/router";
const App = () => {
  return (
    <BrowserRouter>
      <GetALLRoutes />
    </BrowserRouter>
  );
};

export default App;
