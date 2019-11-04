import React, {useState, useEffect}from 'react'
import pet, { ANIMALS } from '@frontendmasters/pet'
import useDropdown from './useDropdown'
import Results from './Results'

export default function SearchParams() {
  const [location, setLocation] = useState('Seattle, WA')
  const [breeds, setBreeds] = useState([])
  const [animal, AnimalDropdown] = useDropdown("Animal", 'cat', ANIMALS)
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", '', breeds)
  const [pets, setPets] = useState([])

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
  }


  useEffect(()=> {
    setBreeds([])
    setBreed("")
    pet.breeds(animal).then(({breeds}) => {
      const breedStrings = breeds.map(({name})=> name)
      setBreeds(breedStrings)
    })
  }, [animal, setBreed, setBreeds])

  return (
    <div className="search-params" onSubmit={(e)=>  {
      e.preventDefault()
      requestPets()
    }}>
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
      <Results pets={pets}/>
      </form>
    </div>
  )
}

