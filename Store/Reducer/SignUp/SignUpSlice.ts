import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  loading: false,
  data: {},
  error: "",
};

export const FetchSignUp = createAsyncThunk(
  "signUp/FetchSignUp",
  async (data: { email: string; password: string; linkedinUrl: string }) => {
    const response = await fetch("http://localhost:3000/user/sign_up", {
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

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchSignUp.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(FetchSignUp.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
      window.location.reload();
    });
    builder.addCase(FetchSignUp.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "An error occurred";
    });
  },
});

export default signUpSlice.reducer;
