import React, { useEffect, useState } from 'react';
import { getDog } from '../Request';

const Dogs = ({ selectedBreeds }) => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      const breedIds = selectedBreeds.join(',');
      const response = await getDog(10, breedIds);
      setDogs(response.data);
    };

    fetchDogs();
  }, [selectedBreeds]);

  return (
    <div>
      <h2>Dog Images</h2>
      <div className="dogContent">
        {dogs.map((dog) => (
          <img key={dog.id} src={dog.url} alt="Dog" />
        ))}
      </div>
    </div>
  );
};

export default Dogs;