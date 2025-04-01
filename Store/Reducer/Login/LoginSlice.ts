import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  loading: false,
  data: {},
  error: "",
};

export const FetchLogin = createAsyncThunk(
  "Login/FetchLogin",
  async (data: { email: string; password: string }) => {
    const response = await fetch("http://localhost:3000/user/login", {
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

const LoginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchLogin.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(FetchLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
      localStorage.setItem("user", JSON.stringify(state.data));
    });
    builder.addCase(FetchLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "An error occurred";
    });
  },
});

export default LoginSlice.reducer;
