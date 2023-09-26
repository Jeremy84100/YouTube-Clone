import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: { value: true },
    reducers: {
      toggleSearch: (state) => {
        state.value = !state.value;
      },
    },
  });

export const { toggleSearch } = searchSlice.actions;
export default searchSlice.reducer;
