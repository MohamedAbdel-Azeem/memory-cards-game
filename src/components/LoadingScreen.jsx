import { useEffect, useState } from "react";
import spaceShip from "../assets/images/rickAndMortySpaceShip.gif";
import { Card } from "./Card";
import { fetchAPI } from "../utils/api-fetcher.js";

export function LoadingScreen({ setCards, setLoading, setPlayGame }) {
    
    
    useEffect(() => {
        const loadGifs = async () => {
        try {
            setPlayGame(true);
            const fetchedData = await fetchAPI();
            setCards(fetchedData);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false); // In case of error, also set loading to false
        }
        };

        loadGifs();
        
    });
        return (
            <div className="flex flex-col items-center justify-center h-full">
            <img
                src={spaceShip}
                alt="Rick and Morty Space Ship"
                className="max-md:px-5"
            />
            <p className="font-mono text-3xl pt-4">Loading...</p>
            </div>
        );
}
