import React, { useState } from "react";

function NewPlantForm({ handlePost }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    const newPlant = {
      name: name,
      image: image,
      price: parseFloat(price),
    };

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((newPlant) => handlePost(newPlant));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          name="name"
          placeholder="Plant name"
        />
        <input
          value={image}
          onChange={(event) => setImage(event.target.value)}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
