import { useState } from 'react';
import { useEffect } from 'react';

// faces
import './faces-css/talk.scss';
import './faces-css/common.scss';
import './faces-css/default.scss'

export const PikachuFaces = (props: any) => {
  const [animate, setAnimate] = useState('dafault');

  useEffect(() => {
    animateTalk();
  }, [])

  // Animação de conversa
  const animateTalk = () => {
    let frame = 0;
    let order = 'up'

    setInterval(() => {
      frame = order === 'up' ? frame+1 : frame-1;

      if (frame === 2 || frame === 0) {
        order = frame === 2 ? 'down' : 'up'
      }

      setAnimate(`talk-${frame}`);
    }, 1000)
  }


  return (
    <>
      <div className={`face pikachu-face-${animate}`}></div>
    </>
  );
}