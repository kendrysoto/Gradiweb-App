import './App.css';
import Banner from './components/Banner';
import Forecast from './components/Forecast';
import LocationCity from './components/LocationCity';
import CurrentWeather from './components/CurrentWeather';

function App() {
  return (
    <div className="App">
      <Banner />
      <Forecast />
      <LocationCity />
      <CurrentWeather />
    </div>
  );
}

export default App;
