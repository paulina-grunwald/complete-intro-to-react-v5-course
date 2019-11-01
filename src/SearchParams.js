import React, {useState}from 'react'
import { ANIMALS } from '@frontendmasters/pet'
export default function SearchParams() {
  const [location, setLocation] = useState('Seattle, WA')
  const [animal, updateAnimal] = useState("")
  const [breed, updateBreed] = useState("");
  const [breeds, updateBreeds] = useState([]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input id="location" value={location} paceholder="Location" onChange={e=> setLocation(e.target.value)}/>
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={e => updateAnimal(e.target.value)}
            onBlur={e => updateAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={e => updateBreed(e.target.value)}
            onBlur={e => updateBreed(e.target.value)}
          >
            <option>All</option>
            {breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
      <button>
        Submit
      </button>
      </form>
    </div>
  )
}

