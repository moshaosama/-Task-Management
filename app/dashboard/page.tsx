import User from "../components/User"; // Importing the User component to display the user's name
import DashBoardDetails from "./Components/DashBoardDetails"; // Importing the component for dashboard details (e.g., total projects, tasks, etc.)
import OverallProgress from "./Components/OverallProgress"; // Importing the component that displays overall progress
import RecentTasks from "./Components/RecentTasks"; // Importing the component that lists the recent tasks

const DashBoard = () => {
  return (
    <div className="flex max-sm:flex-col">
      {" "}
      {/* The outer container uses flex layout with column orientation on small screens */}
      <div>
        {/* User greeting section */}
        <div>
          <h1 className="flex gap-1 text-3xl">
            <span className="font-bold flex items-center">
              Hello <User />{" "}
              {/* Displaying the user’s name dynamically using the User component */}
            </span>
          </h1>
          <p className="text-sm text-gray-400">Welcome Back!</p>
        </div>
        {/* Dashboard details */}
        <DashBoardDetails />{" "}
        {/* Displays dashboard stats like total projects, tasks, and categories */}
        {/* Recent tasks */}
        <RecentTasks />
        {/* Displays a list of recent tasks, showing task progress */}
      </div>
      {/* Overall progress */}
      <OverallProgress />{" "}
      {/* Displays an overall progress component, likely with some progress tracking */}
    </div>
  );
};

export default DashBoard;
