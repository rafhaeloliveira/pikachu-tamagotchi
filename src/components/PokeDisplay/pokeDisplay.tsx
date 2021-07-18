// styles
import { PikachuFaces } from '../PikachuFaces/PikachuFaces';
import './pokeDisplay.scss';

export const PokeDisplay = () => {
  return (
    <>
      <div className="pokedex-display">
        <div className="pokedex-led-visor">
          <PikachuFaces />
        </div>
      </div>
    </>
  )
}