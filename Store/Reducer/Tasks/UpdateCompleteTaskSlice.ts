import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

export const fetchUpdateCompleteTask = createAsyncThunk(
  "updateComplete/fetchUpdateCompleteTask",
  async (id: string) => {
    const response = await fetch("http://localhost:3000/tasks/update_task", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to create Task");
    }
    return response.json();
  }
);

const updateCompleteTask = createSlice({
  name: "updateComplete",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUpdateCompleteTask.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchUpdateCompleteTask.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUpdateCompleteTask.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "An error occurred";
    });
  },
});

export default updateCompleteTask.reducer;
