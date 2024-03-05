const url = "https://api.giphy.com/v1/gifs/search?api_key=ByxMRcbzplkTzJsjEgFv6ea0jezIa36z&q=cat&limit=10&offset=0&rating=pg-13&lang=en&bundle=low_bandwidth";

export async function fetchGifs() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch GIFs');
        }
        const data = await response.json();
        const gifs = [];
        data.data.forEach(element => {
            gifs.push(element.images.fixed_height_small.url);
        });
        return gifs;
    } catch (error) {
        console.error(error);
        return null;
    }
}