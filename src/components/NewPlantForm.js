import React, {useState} from "react"

function NewPlantForm( {handlePost} ) {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState(0)

  function handleNameChange(event) {
    const value = event.target.value
    setName(value)
  }

  function handleImageChange(event) {
    const value = event.target.value
    setImage(value)
  }

  function handlePriceChange(event) {
    const value = event.target.value
    setPrice(value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newPlant = {
      name: name,
      image: image,
      price: parseInt(price),
    }


  fetch('http://localhost:6001/plants', {
    method: 'POST',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlant),
  })
    .then(response => response.json())
    .then(newPlant => handlePost(newPlant))

    // handlePost(newPlant)
  }




  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Plant name"
          onChange={handleNameChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleImageChange}
        />

        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          onChange={handlePriceChange}
        />

        <button type="submit">Add Plant</button>
      </form>
    </div>
  )
}

export default NewPlantForm
