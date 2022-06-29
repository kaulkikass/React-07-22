import {useState } from "react";

function Avaleht() {
    /* muutuv väärtus (hoitakse HTML-s), funktsiooni abil saan seda muuta */
                                            // () - sulgude sees on algväärtus
    const [muutuja, funktsioon] = useState(0)
                                //useState - Reacti erikood
    
    const toode = localStorage.getItem("tooted");



    return ( 
        <div>
            <div>Avalehe leht</div>
            <div>{toode}</div>
            <button onClick={() => funktsioon(muutuja - 1)}>-1</button>
            <div>{muutuja}</div>
            <button onClick={() => funktsioon(muutuja + 1)}>+1</button>
           {  /* dünaamiline väljakuvamine */ }
            { muutuja < 0 && <div>Kogus ei saa olla miinuses!</div>}
        </div> );
}

export default Avaleht;