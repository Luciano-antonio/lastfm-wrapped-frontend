import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import TopTracks from './TopTracks'
import TopArtists from './TopArtists'
import RecentlyPlayed from './RecentlyPlayed'
import Login from './Login'

function App() {
  return (
   <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/top-tracks" element={<TopTracks />} />
      <Route path="/top-artists" element={<TopArtists />} />
      <Route path="/recently-played" element={<RecentlyPlayed />} />
      <Route path="/dashboard" element={<Dashboard />} />
   </Routes>
  )
}

export default App