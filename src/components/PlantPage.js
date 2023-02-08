import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((plants) => setPlants(plants));
  }, []);

  function handlePost(newPlants) {
    setPlants([...plants, newPlants]);
  }

  const filteredPlantArray = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm handlePost={handlePost} />
      <Search setSearch={setSearch} />
      <PlantList plants={filteredPlantArray} />
    </main>
  );
}

export default PlantPage;
