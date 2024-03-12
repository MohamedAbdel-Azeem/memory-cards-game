const url = "https://rickandmortyapi.com/api/character";

export async function fetchAPI() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch GIFs');
        }
        const data = await response.json();
        return data.results.slice(0,11);
    } catch (error) {
        console.error(error);
        return null;
    }
}