import { Routes, Route } from 'react-router';
import { Homepage } from './pages/homepage/Homepage';
import { Characters } from './pages/characters/Characters';
import { Episodes } from './pages/episodes/Episodes';
import { Locations } from './pages/locations/Locations';
import { MyWatchlist } from './pages/watchlist/MyWatchlist';
import { MainMenu } from './ui/components/MainMenu/MainMenu';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <MainMenu />
      <Box component='main'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/episodes' element={<Episodes />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/watchlist' element={<MyWatchlist />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
