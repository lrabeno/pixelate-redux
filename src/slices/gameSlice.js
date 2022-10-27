import { createSlice } from "@reduxjs/toolkit";

// Set the initial state
const initialState = {
  grid: [Array(20).fill("")],
};

// Set actions and settings specific to this state
export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    // Future actions go here
  },
});

// Export everything needed to interact with it
// export const { grid } = gameSlice.actions;
export default gameSlice.reducer;
