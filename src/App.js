import './App.css';
import Player from "./player/player"
import Menu from "./menu/menu"
import Search from './search/search';
import Music from "./Pages/Music/Music.js";
import Like from "./Pages/Like/Like.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <h1>Deezer-Api-Spotify</h1> */}
      <Router>
      <Menu/>
      <div className='Main'>
      <Search/>
      <div className='list'>
        <Routes>
          <Route path="/Music" element={<Music />} />
          <Route path="/Like" element={<Like />} />
        </Routes>
        </div>
        </div>
        <Player/>
      </Router>
    </div>
  );
}

export default App;
