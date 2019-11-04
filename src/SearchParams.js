import React, {useState, useEffect}from 'react'
import pet, { ANIMALS } from '@frontendmasters/pet'
import useDropdown from './useDropdown'

export default function SearchParams() {
  const [location, setLocation] = useState('Seattle, WA')
  const [breeds, setBreeds] = useState([])
  const [animal, AnimalDropdown] = useDropdown("Animal", 'cat', ANIMALS)
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", '', breeds)

  useEffect(()=> {
    setBreeds([])
    setBreed("")
    pet.breeds(animal).then(({breeds}) => {
      const breedStrings = breeds.map(({name})=> name)
      console.log(breedStrings)
      setBreeds(breedStrings)
    })
  }, [animal, setBreed, setBreeds])

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input id="location" value={location} paceholder="Location" onChange={e=> setLocation(e.target.value)}/>
        </label>
        <AnimalDropdown />
        <BreedDropdown />
      <button>
        Submit
      </button>
      </form>
    </div>
  )
}

