import {createSlice} from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
     setUser: (state, action) => {
      state.user = action.payload;
     }
  }
});

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,   // 🔥 AUTO LOAD
  loading: false,
};


//Export the actions
export const {setLoading,setUser} = authSlice.actions;
//Export the reducer
export default authSlice.reducer;

export const authReducer = authSlice.reducer;//Add this line if 