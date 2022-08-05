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
    updateData: (state, action) => {
      const copyData = JSON.parse(JSON.stringify(state.storyData));
      const found = copyData.find((rec) => rec.id === action.payload.id);
      if (found) {
        found[action.payload.field] = action.payload.value;
      }
      return { ...state, storyData: copyData };
    },
  },
});
export const landingSliceReducer = landingSlice.reducer;
export const landingSliceActions = landingSlice.actions;
