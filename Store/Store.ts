import { configureStore } from "@reduxjs/toolkit";
import createProjectReducer from "./Reducer/ProjectSlice/createProjectSlice";
import getProjectsReducer from "./Reducer/ProjectSlice/getProjectSlice";
import getProjectByIdReducer from "./Reducer/ProjectSlice/getProjectByIdSlice";
import {
  getTasksReducer,
  getAllTasksReducer,
} from "./Reducer/Tasks/getTasksSlice";
import createTasksSlice from "./Reducer/Tasks/createTaskSlice";

export const Store = configureStore({
  reducer: {
    createProject: createProjectReducer,
    Projects: getProjectsReducer,
    projectById: getProjectByIdReducer,
    createTasks: createTasksSlice,
    Tasks: getTasksReducer,
    AllTasks: getAllTasksReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
