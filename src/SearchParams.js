import React, {useState}from 'react'
import { ANIMALS } from '@frontendmasters/pet'
import useDropdown from './useDropdown'

export default function SearchParams() {
  const [location, setLocation] = useState('Seattle, WA')
  const [breeds, setBreeds] = useState([])
  const [animal, AnimalDropdown] = useDropdown("Animal", 'cat', ANIMALS)
  const [breed, BreedDropdown] = useDropdown("Breed", '', [])

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

