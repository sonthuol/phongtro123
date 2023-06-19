import { Route, Routes } from "react-router-dom";
import { Home, Login } from "./containers/Public";
import { path } from "./utils/constant";

function App() {
  return (
    <div className="h-screen w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} Component={Home}>
          <Route path={path.LOGIN} Component={Login} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
