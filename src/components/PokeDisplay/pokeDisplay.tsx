import { IconButton } from '@material-ui/core';
import { Fastfood, Hotel, InsertEmoticon } from '@material-ui/icons';
import { useState } from 'react';

// styles
import { PikachuFaces } from '../PikachuFaces/PikachuFaces';
import './pokeDisplay.scss';

export const PokeDisplay = () => {
  const [action, setAction] = useState('default')

  return (
    <>
      <div className="pokedex-display">
        <div className="pokedex-led-visor">
          <PikachuFaces action={action} />
        </div>
        <div className="pokedex-btn-container">
          <IconButton aria-label="talk" onClick={() => setAction('default')} >
            <InsertEmoticon />
          </IconButton>
          <IconButton aria-label="sleep" onClick={() => setAction('sleep')} >
            <Hotel />
          </IconButton>
          <IconButton aria-label="eat" onClick={() => setAction('eat')} >
            <Fastfood />
          </IconButton>
        </div>
      </div>
    </>
  )
}