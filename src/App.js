import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Rockets from './pages/Rockets';
import Mission from './pages/Missions';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import './styles/navbar.css';
import './styles/rockets.css';

function App() {
  return (
    <div className="space-travelers">
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<Rockets />} />
          <Route exact path="/missions" element={<Mission />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/notfound" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
