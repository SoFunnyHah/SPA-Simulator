import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { Route, Routes } from 'react-router-dom';
import MyNavbar from './components/MyNavbar/MyNavbar';
import TradingPage from './components/TradingPage';
import ArchivePage from './components/ArchivePage';

function App() {
  const [history, setHistory] = useState([]);
  return (
    <Container>
      <MyNavbar />
      <Routes>
        <Route path="/Trading" element={<TradingPage setHistory={setHistory} />} />
        <Route path="/Archive" element={<ArchivePage history={history} />} />
      </Routes>
    </Container>
  );
}

export default App;
