import { useState } from 'react';
import { useEffect } from 'react';

// Pixel art em css gerada via: https://www.pixelartcss.com/
import './faces-css/sleep.scss';
import './faces-css/talk.scss';
import './faces-css/common.scss';
import './faces-css/default.scss';
import './faces-css/eating.scss';

let interval: any;

export const PikachuFaces = (props: any) => {
  const { action } = props;
  const [animate, setAnimate] = useState('dafault');

  useEffect(() => {
    switch(action) {
      case 'eat':
        clearInterval(interval);
        animateEating();
        break;
      case 'sleep':
        clearInterval(interval);
          animateSleep();
          break;
      default:
        clearInterval(interval);
        animateTalk();
        break;
    }
  }, [action]);

  // Animação de conversa
  const animateTalk = () => {
    let frame = 0;
    let order = 'up'

    interval = setInterval(() => {
      frame = order === 'up' ? frame+1 : frame-1;

      if (frame === 2 || frame === 0) {
        order = frame === 2 ? 'down' : 'up'
      }

      setAnimate(`talk-${frame}`);
    }, 1000)

    console.log('animateTalk =>', interval)
  }

  const animateSleep = () => {
    let frame = 0;
    let order = 'up'

    interval = setInterval(() => {
      frame = order === 'up' ? frame+1 : frame-1;

      if (frame === 1 || frame === 0) {
        order = frame === 1 ? 'down' : 'up'
      }

      setAnimate(`sleep-${frame}`);
    }, 1000)

    console.log('animateSleep =>', interval)
  }

  const animateEating = () => {
    let frame = 0;
    
    interval = setInterval(() => {
      frame++;

      setAnimate(`watermelon-${frame}`);

      frame = frame === 4 ? 0 : frame;
    }, 1000)

    console.log('animateEating =>', interval)
  }

  return (
    <>
      <div className={`face pikachu-face-${animate}`}></div>
    </>
  );
}