import {useState} from 'react';
import { Card } from './Card';


export function Game({cards}){
    const [score,setScore] = useState(0);
    const [lose,setLose] = useState(false);
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
                    />);
                })
                }
            </div>
        </div>
    );
}