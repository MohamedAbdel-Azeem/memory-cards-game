import { useState } from 'react';

export function Card({name,image,setLose,setScore,shuffle}){
    const [isPicked,setIsPicked] = useState(false);

    const handleClick = () => {
        if (isPicked){
            setLose(true);
            return;
        }
        setIsPicked(true);
        setScore(prevScore => prevScore + 1);
        shuffle();
    };

    return (
        <button onClick={handleClick}>
            <div className='p-3 bg-slate-200 rounded-lg flex flex-col items-center justify-center gap-2 shadow-lg hover:shadow-slate-300 drop-shadow-xl'>
                <img src={image} alt={name} className='max-md:size-20 size-48 border border-slate-950 rounded-full'/>
                <p className='text-slate-950 text-lg font-mono font-medium text-center'>{name}</p>
            </div>
        </button>
    );
}