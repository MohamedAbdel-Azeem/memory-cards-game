import {useState,useRef} from 'react';
import { Card } from './Card';


export function Game({cards}){
    const [score,setScore] = useState(0);
    const [lose,setLose] = useState(false);
    const [isFlipping, setIsFlipping] = useState(false);
    return (
        <div className='flex flex-col justify-center items-center pt-4'>
            <div className='p-2 bg-slate-50 rounded-md w-44 text-black'>
                {!lose && <h1 className="text-center text-2xl font-semibold">Score: {score}</h1>}
                {lose && <h1 className="text-center text-2xl font-semibold text-red-600">You Lost!</h1>}
            </div>
            <div className="flex flex-wrap justify-center gap-4 px-8 py-10">
                {cards.map((card) => {
                    return (<Card
                        key={card.id} 
                        name={card.name}
                        image={card.image}
                        setScore={setScore}
                        setLose={setLose}
                        shuffle={()=>{shuffle(cards)}}
                        lost={lose}
                        isFlipping={isFlipping}
                        setIsFlipping={setIsFlipping}
                    />);
                })
                }
            </div>
        </div>
    );
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }