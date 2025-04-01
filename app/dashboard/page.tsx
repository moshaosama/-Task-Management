import DashBoardDetails from "./Components/DashBoardDetails";
import OverallProgress from "./Components/OverallProgress";
import RecentTasks from "./Components/RecentTasks";

const DashBoard = () => {
  return (
    <div className="flex ">
      <div>
        <div>
          <h1 className="flex gap-1 text-3xl">
            <span className="font-bold">Hello</span>
            Mo4a
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
