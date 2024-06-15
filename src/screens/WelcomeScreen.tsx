import React from 'react';
import './WelcomeScreen.css'; // Importa los estilos específicos

interface WelcomeScreenProps {
    onEnter: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onEnter }) => {
    return (
        <div className="welcome-screen">
            <img src={require('../assets/welcome-image.jpg')} alt="Welcome" className="welcome-image" />
            <button className="enter-button" onClick={onEnter}>ENTRAR</button>
        </div>
    );
};
