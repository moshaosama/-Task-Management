import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  loading: false,
  data: {},
  error: "",
};

export const fetchGetProductById = createAsyncThunk(
  "getProjects/fetchGetAllProducts",
  async (id: string) => {
    const response = await fetch(`http://localhost:3000/project/${id}`);
    if (!response.ok) {
      throw new Error("Failed to create project");
    }
    return response.json();
  }
);

const getProjectByIdSlice = createSlice({
  name: "getProjects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetProductById.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchGetProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchGetProductById.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "An error occurred";
    });
  },
});

export default getProjectByIdSlice.reducer;
