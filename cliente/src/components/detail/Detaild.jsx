import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from './detail.module.css'


const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

  return (
    <div className={styled.container}>
      {character.name && (
        <div>
          {character.name && <h1>{character.name}</h1>}
          {character.image && (
            <img src={character.image} alt={character.name} />
          )}
          {character.status && <h2>Status: {character.status}</h2>}
          {character.species && <h2>Specie: {character.species}</h2>}
          {character.gender && <h2>Gender: {character.gender}</h2>}
          {character.origin?.name && character.origin.name === "unknown" ? (
            <h2>Origin: Humano</h2>
          ) : (
            <h2>Origin: {character.origin.name}</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default Detail;
