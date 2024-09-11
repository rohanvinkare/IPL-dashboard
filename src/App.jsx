import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MatchDetails from "./components/MatchDetails";
import Navbar from "./components/Navbar";
import PointsTable from "./components/PointsTable";

function App() {
  return (
    <div className="max-w-screen min-h-screen bg-slate-100/60 ">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/points-table" element={<PointsTable />} />
          <Route
            path="/news"
            element={
              <h1 className="m-4 my-[15%] text-center text-bold text-xl">
                Coming Soon......!
              </h1>
            }
          />
          <Route path="/matchDetails/:id" element={<MatchDetails />} />
        </Route>

        <Route
          path="*"
          element={
            <h1 className="m-4 my-[15%] text-center text-bold text-xl">
              Route Dose Not Exists...
            </h1>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
