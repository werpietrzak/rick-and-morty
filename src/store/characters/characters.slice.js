import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  characters: [],
  pages: 1,
};

const filterParams = {
  page: (page) => (page ? `page=${page}` : ''),
  status: (status) => (status ? `status=${status}` : ''),
  gender: (gender) => (gender ? `gender=${gender}` : ''),
  species: (species) => (species ? `species=${species}` : ''),
};

const url = 'https://rickandmortyapi.com/api/character/';

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
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

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
      state.characters = action.payload.results;
      state.pages = action.payload.info.pages;
    },
  },
});

export default charactersSlice.reducer;
