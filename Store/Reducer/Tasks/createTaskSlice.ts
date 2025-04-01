import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

export const fetchCreateTask = createAsyncThunk(
  "createTask/fetchCreateTask",
  async (
    { Title, projectID }: { Title: string; projectID: string },
    { rejectWithValue }
  ) => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "null");
      const accessToken = user?.access_token;

      if (!accessToken) {
        return rejectWithValue("Unauthorized: No access token provided");
      }

      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Title, projectID }),
      });

      if (!response.ok) {
        throw new Error("Failed to create Task");
      }

      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message || "An error occurred");
    }
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
      state.error = action.payload as string;
    });
  },
});

export default createTaskSlice.reducer;
