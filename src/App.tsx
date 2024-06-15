import React, { useState } from 'react';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { DrinkSelectionScreen } from './screens/DrinkSelectionScreen';
import './App.css';

const App: React.FC = () => {
    const [screen, setScreen] = useState<'welcome' | 'drinkSelection'>('welcome');

    return (
        <div className="App">
            {screen === 'welcome' && <WelcomeScreen onEnter={() => setScreen('drinkSelection')} />}
            {screen === 'drinkSelection' && <DrinkSelectionScreen />}
        </div>
    );
};

export default App;
