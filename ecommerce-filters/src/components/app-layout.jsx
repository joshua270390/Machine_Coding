import {Outlet} from "react-router-dom";
import Header from "./header";
import Breadcrum from "./breadcrum";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Breadcrum/>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
