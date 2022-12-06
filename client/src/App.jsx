import React from 'react';
import { Container } from 'reactstrap';
import { Route, Routes } from 'react-router-dom';
import MyNavbar from './components/MyNavbar/MyNavbar';
import TradingPage from './components/TradingPage';
import ArchivePage from './components/ArchivePage';

function App() {
  return (
    <Container>
      <MyNavbar />
      <Routes>
        <Route path="/Trading" element={<TradingPage />} />
        <Route path="/Archive" element={<ArchivePage />} />
      </Routes>
    </Container>
  );
}

export default App;
