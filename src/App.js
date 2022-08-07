import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { LandingPage } from './Pages/LandingPage/LandingPage';
import { SignUpPage } from "./Pages/SignUpPage/SignUpPage";
import { PlayList } from "./Pages/Playlist/PlayList"
import { LikedVideos } from "./Pages/LikedVideos/LikedVideos";
import { WatchLater } from "./Pages/WatchLater/WatchLater";
import { History } from "./Pages/History/History";
// import MockMan from "mockman-js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/playlist" element={<PlayList />} />
        <Route path="/liked" element={<LikedVideos />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/history" element={<History />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* <Route path="/mock" element={<MockMan />} /> */}
      </Routes>

    </BrowserRouter >
    // <h1>HEllo</h1>
  );
}

export default App;
