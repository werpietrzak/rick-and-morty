import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './characters/characters.slice';
import episodesReducer from './episodes/episodes.slice';
import locationsReducer from './locations/locations.slice';
import watchlistReducer from './watchlist/watchlist.slice';
import { loadState } from './localStorage';

const persistedState = loadState();

export default configureStore({
  reducer: {
    characters: charactersReducer,
    episodes: episodesReducer,
    locations: locationsReducer,
    watchlist: watchlistReducer,
  },
  preloadedState: persistedState,
});
