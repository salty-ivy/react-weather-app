function LocationSelector({location, setLocation, locationData, fetchData}) {


  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(location)
  };

  const locationOptions = locationData.map((location) => (
    <option key={location} value={location}>
      {location}
    </option>
  ));

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: '10px' }}
    >
      <div style={{display: "flex", gap:"10px", justifyContent: 'center'}}>
        <label>Select a Location:</label>
        <select value={location} onChange={handleLocationChange} style={{padding: 5, borderRadius: 5, minWidth: 100, fontSize: 15}}>
          {locationOptions}
        </select>
      </div>
      <button type="submit" style={{}}>Get Weather</button>
    </form>
  );
}

export default LocationSelector;
