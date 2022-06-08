import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import pages from './pages/pages';
import Application from './pages/Application'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Dashboard} />
          <Route path='/pages' component={pages} />
          <Route path='/Application' component={Application} />
        </Routes>
      </Router>
    </>
  );
}

export default App;