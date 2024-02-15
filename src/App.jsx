import React from 'react';
import TrackingComponent from './TrackingComponent';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tracking from './Tracking';
import Navbar from './Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <h1
        style={{
          marginTop: '46px',
          textAlign: 'center',
          fontSize: '32px',
          fontWeight: '600'
        }}>Air Cargo Tracking</h1>
      <TrackingComponent />
    </div>
  );
}

export default App;
