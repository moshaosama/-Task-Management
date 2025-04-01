import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

export const FetchcreateCategory = createAsyncThunk(
  "createCategory/FetchcreateCategory",
  async (data: { Title: string }, { rejectWithValue }) => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "null");
      const accessToken = user?.access_token;

      if (!accessToken) {
        return rejectWithValue("Unauthorized: No access token provided");
      }

      const response = await fetch("http://localhost:3000/categories", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create Category");
      }

      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message || "An error occurred");
    }
  }
);

const createCategorySlice = createSlice({
  name: "createCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchcreateCategory.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(FetchcreateCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
      console.log("Category created successfully!");
    });
    builder.addCase(FetchcreateCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default createCategorySlice.reducer;
