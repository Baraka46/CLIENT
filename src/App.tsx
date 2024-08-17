import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import WeatherComponent from './components/WeatherData';

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold">Welcome to My Weather App</h1>
    </header>
    <main className="p-6">
      <WeatherComponent />
    </main>
    <footer className="bg-blue-600 text-white p-4 text-center">
      <p>Powered by FreeWeather API</p>
    </footer>
  </div>
  );
}

export default App;
