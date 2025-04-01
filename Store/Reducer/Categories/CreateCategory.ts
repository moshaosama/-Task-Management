import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  loading: false,
  data: {},
  error: "",
};

export const FetchcreateCategory = createAsyncThunk(
  "craeteCategory/FetchcreateCategory",
  async (data: { Title: string }) => {
    const response = await fetch("http://localhost:3000/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create Category");
    }

    return response.json();
  }
);

const createCategorySlice = createSlice({
  name: "craeteCategory",
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
      window.location.reload();
    });
    builder.addCase(FetchcreateCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "An error occurred";
    });
  },
});

export default createCategorySlice.reducer;
