import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { locations: [], pages: 1 };

const filterParams = {
  page: (page) => (page ? `page=${page}` : ''),
  name: (name) => (name ? `name=${name}` : ''),
  type: (type) => (type ? `type=${type}` : ''),
  dimension: (dimension) => (dimension ? `dimension=${dimension}` : ''),
};

const url = 'https://rickandmortyapi.com/api/location/';

export const fetchLocations = createAsyncThunk(
  'locations/fetchLocations',
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

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLocations.fulfilled]: (state, action) => {
      state.locations = action.payload.results;
      state.pages = action.payload.info.pages;
    },
  },
});

export default locationsSlice.reducer;
