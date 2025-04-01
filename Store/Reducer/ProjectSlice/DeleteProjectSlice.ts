import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  message: "",
  error: "",
};

export const fetchDeleteProducts = createAsyncThunk(
  "getProjects/fetchDeleteProduct",
  async (id: string, { rejectWithValue }) => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "null");
      const accessToken = user?.access_token;

      if (!accessToken) {
        return rejectWithValue("Unauthorized: No access token provided");
      }

      const response = await fetch(`http://localhost:3000/project/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message || "An error occurred");
    }
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
      console.log("Project Deleted Successfully!");
    });
    builder.addCase(fetchDeleteProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default getProjectSlice.reducer;
