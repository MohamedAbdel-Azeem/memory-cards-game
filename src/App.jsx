import React, { useEffect, useState } from 'react';
import { fetchGifs } from './utils/api-fetcher';

function App() {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      {loading && <p>Loading...</p>}
      <div style={{ display: loading ? 'none' : 'block' }}>
        {gifs.map((gif, index) => (
          <img
            key={index}
            src={gif}
            alt="gif"
            style={{ display: 'block' }} // Show images only when loaded
          />
        ))}
      </div>
    </>
  );
}

export default App;
