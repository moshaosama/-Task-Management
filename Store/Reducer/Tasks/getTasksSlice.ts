import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  loading: false,
  data: [],
  error: "",
};

export const fetchGetTasks = createAsyncThunk(
  "getTasks/fetchGetTasks",
  async (id: string) => {
    const response = await fetch(`http://localhost:3000/tasks/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }
    return response.json();
  }
);

export const fetchGetAllTasks = createAsyncThunk(
  "getAllTasks/fetchGetAllTasks",
  async () => {
    const response = await fetch(`http://localhost:3000/tasks`);
    if (!response.ok) {
      throw new Error("Failed to fetch all tasks");
    }
    return response.json();
  }
);

const getAllTasksSlice = createSlice({
  name: "getAllTasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetAllTasks.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchGetAllTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchGetAllTasks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An error occurred";
    });
  },
});

const getTasksSlice = createSlice({
  name: "getTasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetTasks.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchGetTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchGetTasks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An error occurred";
    });
  },
});

export const getAllTasksReducer = getAllTasksSlice.reducer;
export const getTasksReducer = getTasksSlice.reducer;
