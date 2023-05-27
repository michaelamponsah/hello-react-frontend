import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const FETCH_GREETING = 'Greeting/Fetch';
const url = 'http://127.0.0.1:3000/random_greeting';

export const fetchGreeting = createAsyncThunk(FETCH_GREETING, async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.greeting;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.greeting = action.payload;
    });
  },
});

export default greetingSlice.reducer;
