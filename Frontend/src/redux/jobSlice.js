import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alljobs: [],
  singleJob: null,
};

const jobSlice = createSlice({
  name: "job",            // 👈 singular is better
  initialState,           // 👈 use the variable
  reducers: {
    setAllJobs: (state, action) => {
      state.alljobs = action.payload;
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
  },
});

export const { setAllJobs, setSingleJob } = jobSlice.actions;
export default jobSlice.reducer;
