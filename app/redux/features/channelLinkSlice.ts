import { createSlice } from '@reduxjs/toolkit';

const channelLinkSlice = createSlice({
  name: 'changeChannelLink',
    initialState: { value: true },
    reducers: {
      toggle: (state) => {
        state.value = !state.value;
      },
    },
});

export default channelLinkSlice.reducer;

