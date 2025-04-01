import { configureStore } from "@reduxjs/toolkit";
import createProjectReducer from "./Reducer/ProjectSlice/createProjectSlice";
import getProjectsReducer from "./Reducer/ProjectSlice/getProjectSlice";
import getProjectByIdReducer from "./Reducer/ProjectSlice/getProjectByIdSlice";
import {
  getTasksReducer,
  getAllTasksReducer,
} from "./Reducer/Tasks/getTasksSlice";
import createTasksReducer from "./Reducer/Tasks/createTaskSlice";
import getCategoriesReducer from "./Reducer/Categories/getAllCategories";
import loginReducer from "./Reducer/Login/LoginSlice";

export const Store = configureStore({
  reducer: {
    createProject: createProjectReducer,
    Projects: getProjectsReducer,
    projectById: getProjectByIdReducer,
    createTasks: createTasksReducer,
    Tasks: getTasksReducer,
    AllTasks: getAllTasksReducer,
    Categories: getCategoriesReducer,
    Login: loginReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
