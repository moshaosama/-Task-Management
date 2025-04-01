import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  loading: false,
  data: [],
  error: "",
};

export const fetchGetAllProjects = createAsyncThunk(
  "getProjects/fetchGetAllProducts",
  async () => {
    const response = await fetch("http://localhost:3000/project");
    if (!response.ok) {
      throw new Error("Failed to create project");
    }
    return response.json();
  }
);

const getProjectSlice = createSlice({
  name: "getProjects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetAllProjects.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchGetAllProjects.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchGetAllProjects.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "An error occurred";
    });
  },
});

export default getProjectSlice.reducer;
