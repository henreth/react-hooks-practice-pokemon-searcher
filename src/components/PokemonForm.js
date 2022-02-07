import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddChar,poke}) {
  let [formData,setFormData] = useState({
    name:'',
    hp:'',
    front: '',
    back: ''
    })

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    fetch(poke, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        hp: formData.hp,
        sprites: {
          front: formData.front,
          back: formData.back
        }
      }),
  })
    .then((r) => r.json())
    .then((newChar) => onAddChar(newChar));

  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name"
            onChange={handleChange} />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp"
            onChange={handleChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
