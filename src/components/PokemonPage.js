import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const poke = 'http://localhost:3001/pokemon'

function PokemonPage() {
  let [chars,setChars] = useState([]);

  useEffect(()=>{
    fetch(poke)
    .then(r=>r.json())
    .then(pokemons=>setChars(pokemons))
  }, [])


  function handleAddChar(newChar) {
    setChars([...chars,newChar])
  }

  let [searchText,setSearchText] = useState("");

  function handleSearchChange(event) {
    setSearchText(event.target.value);
  }

  let charsToDisplay = chars.filter((char)=>char.name.toLowerCase().includes(searchText.toLowerCase()));
  

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
        onAddChar={handleAddChar}
        poke={poke}/>
      <br />
      <Search
        searchText={searchText}
        onSearchChange={handleSearchChange}
        />
      <br />
      <PokemonCollection 
        chars ={charsToDisplay}
      />
    </Container>
  );
}

export default PokemonPage;
