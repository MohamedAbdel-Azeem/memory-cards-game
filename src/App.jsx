import { useEffect, useState, useRef } from 'react';
import { fetchGifs } from './utils/api-fetcher';
import githubLogo from './assets/images/github-mark.png';
import vibingCat from './assets/images/vibing-cat.gif';
import Icon from '@mdi/react';
import { mdiMusicNote , mdiMusicNoteOff  } from '@mdi/js';
import music from './assets/audio/chipi_chipi_chapa_chpa.mp3'

function App() {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [play, setPlay] = useState(true);

  useEffect(() => {
    const loadGifs = async () => {
      try {
        const fetchedGifs = await fetchGifs();
        setGifs(fetchedGifs);
        setLoading(false); // Set loading to false once gifs are fetched
      } catch (error) {
        console.error(error);
        setLoading(false); // In case of error, also set loading to false
      }
    };

    loadGifs();
  }, []);

  const toggleAudio = () => {
    setPlay(prevPlay => {
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
      if (play === false){
        audioRef.current.pause();
        return;
      }
      audioRef.current.src = music;
      audioRef.current.play();
  };

  return (
    <div className='w-dvw h-dvh bg-red-500 flex flex-col'>
      <header className='p-10 bg-blue-300 flex items-center justify-center'>
        <h1 className='md:text-5xl text-2xl text-center font-medium font-mono'>Cat Memory card game</h1>
        <a href='https://github.com/MohamedAbdel-Azeem/memory-cards-game' target='_blank' className='absolute md:right-10 right-4'>
          <img src={githubLogo} alt='github logo' className='md:w-14 w-7 hover:animate-spin' />
        </a>
      </header>
      <main className='w-full h-full'>
        <div className='w-full py-14 h-full flex flex-col gap-6 items-center justify-start'>
          <img src={vibingCat} alt='Vibing cat' className='max-md:px-6'/>
          <p className='text-center text-xl font-mono font-medium'>Game is simple , Just don't choose the Same Cat Twice!</p>
          <button className='bg-blue-600 hover:bg-blue-700 text-slate-200 p-3 shadow-md rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-xl'>Start Game</button>
        </div>
      <button onClick={toggleAudio} className="bg-blue-600 hover:bg-blue-700 text-slate-200 p-3 shadow-md rounded-full absolute bottom-5 left-10">
            <audio ref={audioRef} loop></audio>
            <Icon path={play ? mdiMusicNoteOff : mdiMusicNote} size={1} />
      </button> 
      </main>
    </div>
  );
}

export default App;
