import './App.css'
import { useState } from 'react';

const colors = ["red", "green", "blue", "yellow", "purple"];


const ClickColor = () =>{
    const [colorIndex, setCouleurIndex] = useState(0);
    return(
        <div className="boite" style={{backgroundColor: colors[colorIndex]}}>
            <h1>Boite</h1>
            <button onClick={() => setCouleurIndex((colorIndex + 1) % colors.length)}>
                {colors[colorIndex + 1 % colors.length]}
            </button>
            <p>{colors[colorIndex]}</p>
        </div>
    );
};

export default ClickColor;