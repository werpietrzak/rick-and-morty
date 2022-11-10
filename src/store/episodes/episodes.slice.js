import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  episodes: [],
  pages: 1,
};

const filterParams = {
  page: (page) => (page ? `page=${page}` : ''),
  name: (name) => (name ? `name=${name}` : ''),
};

const url = 'https://rickandmortyapi.com/api/episode/';

export const fetchEpisodes = createAsyncThunk(
  'episodes/fetchEpisodes',
  async (props) => {
    try {
      const params = Object.entries(filterParams)
        .map(([key, value]) => value(props[key]))
        .filter(Boolean)
        .join(`&`);
      const response = await axios.get(`${url}?${params}`);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchEpisodes.fulfilled]: (state, action) => {
      state.episodes = action.payload.results;
      state.pages = action.payload.info.pages;
    },
  },
});

export default episodesSlice.reducer;
