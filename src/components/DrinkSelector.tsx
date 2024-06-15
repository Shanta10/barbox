import React from 'react';
import pepsi from '../assets/pepsi.png';
import whisky from '../assets/whisky.jpg';
import ron from '../assets/ron.jpg';

interface DrinkSelectorProps {
    onSelect: (drink: string) => void;
}

export const DrinkSelector: React.FC<DrinkSelectorProps> = ({ onSelect }) => {
    return (
        <div>
            <img src={pepsi} alt="Drink 1" onClick={() => onSelect('Drink 1')} />
            <img src={whisky} alt="Drink 2" onClick={() => onSelect('Drink 2')} />
            <img src={ron} alt="Drink 3" onClick={() => onSelect('Drink 3')} />
        </div>
    );
};
