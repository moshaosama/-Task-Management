import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

export const FetchcreateProject = createAsyncThunk(
  "createProject/FetchcreateProject",
  async (data: { title: string; description: string }, { rejectWithValue }) => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "null");
      const accessToken = user?.access_token;

      if (!accessToken) {
        return rejectWithValue("Unauthorized: No access token provided");
      }

      const response = await fetch("http://localhost:3000/project", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create project");
      }

      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message || "An error occurred");
    }
  }
);

const createProjectSlice = createSlice({
  name: "createProject",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchcreateProject.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(FetchcreateProject.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(FetchcreateProject.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default createProjectSlice.reducer;
