import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  loading: false,
  data: [],
  error: "",
};

export const fetchGetAllCategories = createAsyncThunk(
  "getProjects/fetchGetAllCategories",
  async () => {
    const response = await fetch("http://localhost:3000/categories");
    if (!response.ok) {
      throw new Error("Failed to create project");
    }
    return response.json();
  }
);

const getCategoriesSlice = createSlice({
  name: "getCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetAllCategories.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchGetAllCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchGetAllCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "An error occurred";
    });
  },
});

export default getCategoriesSlice.reducer;
