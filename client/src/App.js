import { Route, Routes } from "react-router-dom";
import { Home, Login, Rental, DetailPost } from "./containers/Public";
import { path } from "./utils/constant";
import Homepage from "./containers/Public/Homepage";

function App() {
  return (
    <div className="w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} Component={Home}>
          <Route path="*" Component={Homepage} />
          <Route path={path.LOGIN} Component={Login} />
          <Route path={path.CHO_THUE_CAN_HO} Component={Rental} />
          <Route path={path.NHA_CHO_THUE} Component={Rental} />
          <Route path={path.CHO_THUE_MAT_BANG} Component={Rental} />
          <Route path={path.CHO_THUE_PHONG_TRO} Component={Rental} />
          <Route
            path={path.DETAIL_POST__TITLE__POSTID}
            Component={DetailPost}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
