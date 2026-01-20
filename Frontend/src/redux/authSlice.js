import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  }
});

//Export the actions
export const {setLoading} = authSlice.actions;
//Export the reducer
export default authSlice.reducer;

export const authReducer = authSlice.reducer;//Add this line if 