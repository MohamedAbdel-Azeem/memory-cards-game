import { useEffect, useState, useRef } from 'react';
import { fetchGifs } from './utils/api-fetcher';
import githubLogo from './assets/images/github-mark-white.png';
import runningGif from './assets/images/rickAndMortyRunning.gif';
import logoPng from './assets/images/Rick-And-Morty-Logo.png';
import Icon from '@mdi/react';
import { mdiMusicNote , mdiMusicNoteOff  } from '@mdi/js';
import music from './assets/audio/rick_and_morty_intro.mp3'

function App() {
  const [loading, setLoading] = useState(false);
  const [playAudio, setPlayAudio] = useState(false);
  const [playGame, setPlayGame] = useState(false);

  useEffect(() => {
    const loadGifs = async () => {
      if (!loading) return;
      try {
        setPlayGame(true);
        const fetchedGifs = await fetchGifs();
        setGifs(fetchedGifs);
      } catch (error) {
        console.error(error);
        setLoading(false); // In case of error, also set loading to false
      }
    };

    loadGifs();
    
  }, [loading]);

  const startGame = () => setLoading(true);

  const toggleAudio = () => {
    setPlayAudio(prevPlay => {
      if (prevPlay){
        startAudio(null);
        return false;
      } else {
        startAudio();
        return true;
      }
    });
  }

  const audioRef = useRef();
  const startAudio = () => {
      if (playAudio === false){
        audioRef.current.pause();
        return;
      }
      audioRef.current.src = music;
      audioRef.current.play();
  };

  return (
    <div className='w-dvw h-dvh bg-slate-950 text-slate-100 flex flex-col'>
      <header className='p-1 flex items-center justify-center bg-gradient-to-r from-blue-950 to bg-slate-950'>
        <img src={logoPng} alt='Rick and Morty Logo' className='md:w-80 w-48'/>
        <a href='https://github.com/MohamedAbdel-Azeem/memory-cards-game' target='_blank' className='absolute md:right-10 right-4'>
          <img src={githubLogo} alt='github logo' className='md:w-14 w-7 hover:animate-spin' />
        </a>
      </header>
      <main className='w-full h-full'>
      {
        !playGame && !loading &&         
        <div className='w-full py-14 h-full flex flex-col gap-6 items-center justify-start'>
          <img src={runningGif} alt='Rick and Morty Running' className='max-md:px-6'/>
          <p className='text-center text-xl font-mono font-medium'>Game is simple , Just don't choose the Same Character Twice!</p>
          <button className='bg-emerald-600 hover:bg-emerald-700 text-slate-100 p-3 shadow-md rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-xl' onClick={startGame}>Start Game</button>
        </div>
      }
      {
        playGame && loading && <p>Loading</p>
      }
      {
        playGame && !loading && <p>wtf</p>
      }

      <button onClick={toggleAudio} className="bg-emerald-600 hover:bg-emerald-700 text-slate-100 p-3 shadow-md rounded-full absolute bottom-5 left-10">
            <audio ref={audioRef} loop></audio>
            <Icon path={playAudio ? mdiMusicNoteOff : mdiMusicNote} size={1} />
      </button> 
      </main>
    </div>
  );
}

export default App;
