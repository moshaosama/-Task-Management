import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  loading: false,
  message: "",
  error: "",
};

export const fetchDeleteProducts = createAsyncThunk(
  "getProjects/fetchGetAllProducts",
  async (id: string) => {
    const response = await fetch(`http://localhost:3000/project/${id}`, {
      method: "DELETE",
    });
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
    builder.addCase(fetchDeleteProducts.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchDeleteProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload;
      state.error = "";
      window.location.reload();
    });
    builder.addCase(fetchDeleteProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "An error occurred";
    });
  },
});

export default getProjectSlice.reducer;
