import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

export const fetchCreateTask = createAsyncThunk(
  "createTask/fetchCreateTask",
  async (data: { Name: string; projectID: string }) => {
    const response = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to create Task");
    }
    return response.json();
  }
);

const createTaskSlice = createSlice({
  name: "createTask",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCreateTask.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchCreateTask.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCreateTask.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "An error occurred";
    });
  },
});

export default createTaskSlice.reducer;
