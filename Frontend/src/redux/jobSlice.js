import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alljobs: [],
  allAdminJobs: [], 
  singleJob: null,
};

const jobSlice = createSlice({
  name: "job",            // 👈 singular is better
  initialState,           // 👈 use the variable
  reducers: {
    setAllJobs(state, action){
      state.alljobs = action.payload;
    },
    setSingleJob (state, action) {
      state.singleJob = action.payload;
    },
     setAlldminJobs(state, action){
      state.allAdminJobs = action.payload;
    },
      setSearchJobByText(state, action) {
      state.searchJobByText = action.payload;
    },
  },
});

export const { setAllJobs, setSingleJob,setAllAdminJobs ,setSearchJobByText} = jobSlice.actions;
export default jobSlice.reducer;
