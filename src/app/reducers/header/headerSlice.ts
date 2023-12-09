import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HeaderState {
  title: string;
}

const initialState: HeaderState = {
  title: 'Page name',
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    updateHeaderTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { updateHeaderTitle } = headerSlice.actions;
export const selectHeaderTitle = (state: { header: HeaderState }) => state.header.title;
export default headerSlice.reducer;
