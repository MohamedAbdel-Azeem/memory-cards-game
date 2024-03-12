import { useState,useEffect } from "react";
import cardBack from "../assets/images/card-back-img.jpg";

export function Card({
  name,
  image,
  setLose,
  setScore,
  score,
  shuffle,
  lost,
  isFlipping,
  setIsFlipping,
  setWin,
}) {
  const [isPicked, setIsPicked] = useState(false);

  const handleClick = () => {
    if (score >= 10) {
        setWin(true);
        return;
    }
    if (isPicked || lost ) {
      setLose(true);
      return;
    }
    setScore((prevScore) => prevScore + 1);
    setIsPicked(true);
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false);
    }, 700);
    shuffle();
  };

  useEffect(() => {
    if (score === 0){
      setIsPicked(false);
    }
  },[score]);

  return (
    <button onClick={handleClick} className={`flip-card ${isFlipping ? "flipping" : ""} `} >
        <div className="size-64 flex flex-col justify-center items-center bg-slate-200 rounded-lg shadow-lg hover:shadow-slate-300 drop-shadow-xl flip">
            {!isFlipping && (
                <div className="flex flex-col items-center justify-center gap-2">
                    <img
                        src={image}
                        alt={name}
                        className="max-md:size-20 size-48 border border-slate-950 rounded-full"
                    />
                    <p className="text-slate-950 text-lg font-mono font-medium text-center">
                    {name}
                    </p>
                </div>    
            )}
            {isFlipping && (
                <div>
                    <img
                    src={cardBack}
                    alt="Card Back"
                    className="size-64 rounded-lg"
                    />
                </div>
            )}
        </div>
    </button>
        );
}
