import React, { useState } from 'react';
import { DrinkSelector } from '../components/DrinkSelector';
import { QuantitySelector } from '../components/QuantitySelector';

export const DrinkSelectionScreen: React.FC = () => {
    const [selectedDrink, setSelectedDrink] = useState<string | null>(null);
    const [quantity, setQuantity] = useState<number | null>(null);

    return (
        <div>
            <h1>Select Your Drink</h1>
            <DrinkSelector onSelect={setSelectedDrink} />
            <h1>Select Quantity</h1>
            <QuantitySelector onSelect={setQuantity} />
            <button 
                onClick={() => {
                    if (selectedDrink && quantity !== null) {
                        alert(`Serving ${quantity} of ${selectedDrink}`);
                    }
                }}
            >
                Serve
            </button>
        </div>
    );
};
