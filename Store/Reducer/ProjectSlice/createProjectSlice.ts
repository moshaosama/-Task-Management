import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  loading: false,
  data: {},
  error: "",
};

export const FetchcreateProject = createAsyncThunk(
  "createProject/FetchcreateProject",
  async (data: { title: string; description: string }) => {
    const response = await fetch("http://localhost:3000/project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create project");
    }

    return response.json();
  }
);

const createProjectSlice = createSlice({
  name: "craeteProject",
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
      window.location.reload();
    });
    builder.addCase(FetchcreateProject.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "An error occurred";
    });
  },
});

export default createProjectSlice.reducer;
