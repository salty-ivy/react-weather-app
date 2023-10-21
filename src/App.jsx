import { useState } from "react";
import "./App.css";
import LocationSelector from "./components/LocationSelector";
import WeatherInfo from "./components/WeatherCard";

function App() {
  const locationData = ['New Delhi', 'Noida', 'Mumbai', 'Kolkata', 'Chennai'];

  const [location, setLocation] = useState(locationData[0]);
  const [weatherData, setWeatherData] = useState()
  const [loading, setLoading] = useState(false)

  const fetchWeatherData = async (location) => {
    setLoading(true)
    const url =
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`;

    try {
      const response = await fetch(url, {
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API,
          "X-RapidAPI-Host": import.meta.env.VITE_APP_RAPID_HOST
        },
      });

      const result = await response.json();
      setWeatherData(result)
    } catch (error) {
      console.error(error);
      alert(error)
    } finally {
      setLoading(false)
    }
  };

  return (
    <>
      <h2>Weather App</h2>
      <LocationSelector
        locationData={locationData}
        location={location}
        setLocation={setLocation}
        fetchData={fetchWeatherData}
      />
      {loading && <div>Loading...</div>}
      {weatherData && <WeatherInfo weatherData={weatherData}/>}
    </>
  );
}

export default App;
