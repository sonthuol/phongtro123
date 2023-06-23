import { Route, Routes } from "react-router-dom";
import {
  Home,
  Login,
  RentalApartment,
  RentalHouse,
  RentalRoom,
  RentalSpace,
} from "./containers/Public";
import { path } from "./utils/constant";
import Homepage from "./containers/Public/Homepage";

function App() {
  return (
    <div className="h-screen w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} Component={Home}>
          <Route path="*" Component={Homepage} />
          <Route path={path.LOGIN} Component={Login} />
          <Route path={path.CHO_THUE_CAN_HO} Component={RentalApartment} />
          <Route path={path.NHA_CHO_THUE} Component={RentalHouse} />
          <Route path={path.CHO_THUE_MAT_BANG} Component={RentalSpace} />
          <Route path={path.CHO_THUE_PHONG_TRO} Component={RentalRoom} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
