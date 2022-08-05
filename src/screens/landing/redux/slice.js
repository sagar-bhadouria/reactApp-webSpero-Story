import { createSlice, createAction } from "@reduxjs/toolkit";

export const fetchStoryDataCreator = createAction("FETCH_STORY_DATA");
export const fetchStoryDataTypeName = fetchStoryDataCreator.type;

const landingSlice = createSlice({
  name: "landing",
  initialState: {
    storyData: [],
  },
  reducers: {
    putStoryData: (state, action) => {
      return { ...state, storyData: action.payload };
    },
  },
});
export const landingSliceReducer = landingSlice.reducer;
export const landingSliceActions = landingSlice.actions;
