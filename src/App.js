import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Board from './pages/board';
import RecordsDashboard from './pages/RecordsDashboard';
import Error from './pages/Error';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='Toolhub/' element={<Home />} />
        <Route path='leaderboard' element={<Board />} />
        <Route path='records' element={<RecordsDashboard />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
