import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EventPage from './pages/EventPage.jsx';
import LandingPage from "./pages/LandingPage.jsx";
import Layout from './pages/Layout.jsx';

function App() {
  return (
    <BrowserRouter>
      <main className="wrapper">
        <Routes>
          <Route path="/" element={<Layout />}>

            <Route index element={<LandingPage />} />
            <Route path="eventpage" element={<EventPage />} />
            <Route path="landingpage" element={<LandingPage />} />

            {/* for a 404 page
            <Route path="*" element={<NoPage />} />
            */}

          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
