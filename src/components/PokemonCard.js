import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({char}) {
  let [sprite,setSprite] = useState(false);

  function handleSpriteClick() {
    setSprite(!sprite);
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img 
            src={sprite ? char.sprites.back : char.sprites.front}
            alt={char.name}
            onClick={handleSpriteClick}
            />
        </div>
        <div className="content">
          <div className="header">{char.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {char.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
