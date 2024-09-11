import { Outlet } from "react-router-dom";
import InPageNavigation from "./InPageNavigation";

const Navbar = () => {
  return (
    <div className=" w-[100%] lg:w-[60%]   min-h-screen bg-white mx-auto text-black">
      {/* <Link to={"/"}>
          <h1>Matches</h1>
        </Link>
        <Link to={"/points-table"}>
          <h1>Table</h1>
        </Link> */}

      <InPageNavigation
        teams={[
          { title: "Matches", path: "/" },
          { title: "News", path: "/news" },
          { title: "Table", path: "/points-table" },
        ]}
      ></InPageNavigation>

      <Outlet />
    </div>
  );
};

export default Navbar;
