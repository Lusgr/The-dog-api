import { useState } from 'react'

import Dogs from './../components/Dog'
import GetBreed from './../components/Breeds';

function MainPage() {
  const [selectedBreeds, setSelectedBreeds] = useState([]);

  const handleBreedSelection = (breedId) => {
    if (selectedBreeds.includes(breedId)) {
      setSelectedBreeds(selectedBreeds.filter((id) => id !== breedId));
    } else {
      setSelectedBreeds([...selectedBreeds, breedId]);
    }
  };



  return (
    <>
      <GetBreed getBreedData={handleBreedSelection} />
      <Dogs selectedBreeds={selectedBreeds} />
    </>
  );
}

export default MainPage;






