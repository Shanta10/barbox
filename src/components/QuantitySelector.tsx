import React from 'react';

interface QuantitySelectorProps {
    onSelect: (quantity: number) => void;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({ onSelect }) => {
    const quantities = [1/4, 1/2, 3/4, 1];

    return (
        <div>
            {quantities.map(q => (
                <button key={q} onClick={() => onSelect(q)}>{q}</button>
            ))}
        </div>
    );
};
