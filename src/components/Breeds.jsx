import axios from "axios";
import { useEffect, useState } from "react";
import { getDogBreeds } from "../Request.js";

const GetBreed = ({ getBreedData }) => {
  const [breed, setBreed] = useState([]);
  const [select, setSelect] = useState([]);


  useEffect(() => {
    getDogBreeds()
      .then((rsp) => setBreed(rsp.data))
  }, []);
  
  const toggleSelect = (id) => {
    getBreedData(id)
    if (select.includes(id)) {
      setSelect((selection) => selection.filter((item) => item !== id));
    } else {
      setSelect([id, ...select,]);
    }
  };

  return (
    <>
      <div className="dogsBreed">
        {breed.map((item) => (
         <h1
         className={`dogsName ${select.includes(item.id) ? 'selected' : ''}`}
         key={item.id}
         onClick={() => toggleSelect(item.id)}
       >
         {item.name}
       </h1>
        
      
        ))}
      </div>
    </>
  );
};


export default GetBreed;