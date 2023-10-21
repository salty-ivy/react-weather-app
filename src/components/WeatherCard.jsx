import React from 'react';

function WeatherInfo({ weatherData }) {
  const { location, current } = weatherData;

  return (
    <div style={{border: 'solid 1px', borderRadius: 20, marginTop: 20}}>
      <h2>{location?.name}, {location?.country}</h2>
      <div>
        <img src={`https:${current?.condition.icon}`} alt="Weather Icon" />
        <p>Condition: {current?.condition.text}</p>
      </div>
      <p>Region: {location?.region}</p>
      <p>Temperature: {current?.temp_c}°C ({current?.temp_f}°F)</p>
    </div>
  );
}

export default WeatherInfo;
