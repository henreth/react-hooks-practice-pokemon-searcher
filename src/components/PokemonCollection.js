import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({chars}) {
  let charsToDisplay = chars.map((char)=>{
    return <PokemonCard
      key={char.id}
      char={char}
    />
  })
  return (
    <Card.Group itemsPerRow={6}>
      {charsToDisplay}
    </Card.Group>
  );
}

export default PokemonCollection;
