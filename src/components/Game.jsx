import {useState,useRef} from 'react';
import { Card } from './Card';
import Icon from '@mdi/react';
import { mdiReplay } from '@mdi/js';


export function Game({cards}){
    const [score,setScore] = useState(0);
    const [lose,setLose] = useState(false);
    const [win,setWin] = useState(false);
    const [isFlipping, setIsFlipping] = useState(false);
    return (
        <div className='flex flex-col justify-center items-center pt-4'>
            <div className='flex flex-row space-x-3 items-center'>
                <div className='p-2 bg-slate-50 rounded-md w-44 text-black'>
                    {!lose && !win && <h1 className="text-center text-2xl font-semibold">Score: {score}</h1>}
                    {lose && <h1 className="text-center text-2xl font-semibold text-red-600">You Lost!</h1>}
                    {win && <h1 className="text-center text-2xl font-semibold text-emerald-600">You Won!</h1>}
                </div>
                {(win || lose) && 
                <button className="bg-emerald-600 hover:bg-emerald-700 text-slate-100 p-3 shadow-md rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-xl" onClick={()=>{newGame(setScore,setWin,setLose)}}>
                    <Icon path={mdiReplay} size={1} />
                </button>}
            </div>

            <div className="flex flex-wrap justify-center gap-4 px-8 py-10">
                {cards.map((card) => {
                    return (<Card
                        key={card.id} 
                        name={card.name}
                        image={card.image}
                        setScore={setScore}
                        score={score}
                        setLose={setLose}
                        lost={lose}
                        setWin={setWin}
                        won={win}
                        shuffle={()=>{shuffle(cards)}}
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

function newGame(setScore,setWin,setLose){
    setScore(0);
    setWin(false);
    setLose(false);
}