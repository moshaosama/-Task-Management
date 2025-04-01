import User from "../components/User";
import DashBoardDetails from "./Components/DashBoardDetails";
import OverallProgress from "./Components/OverallProgress";
import RecentTasks from "./Components/RecentTasks";

const DashBoard = () => {
  return (
    <div className="flex max-sm:flex-col">
      <div>
        <div>
          <h1 className="flex gap-1 text-3xl">
            <span className="font-bold flex">
              Hello <User />
            </span>
          </h1>
          <p className="text-sm text-gray-400">Welcome Back!</p>
        </div>
        <DashBoardDetails />
        <RecentTasks />
      </div>
      <OverallProgress />
    </div>
  );
};

export default DashBoard;
