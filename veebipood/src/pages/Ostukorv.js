import { useState } from 'react';


function Ostukorv() {

    const [ostukorv, muudaOstukorv] = useState(JSON.parse(sessionStorage.getItem('ostukorv')) || []);

    const lisaOstukorvi = (element) => {
        ostukorv.push(element);
        sessionStorage.setItem('ostukorv', JSON.stringify(ostukorv));
        muudaOstukorv(ostukorv.slice());
    }

    const eemaldaOstukorvist = (index) => {
        ostukorv.splice(index,1);
        sessionStorage.setItem('ostukorv', JSON.stringify(ostukorv)); //salvestus
        muudaOstukorv(ostukorv.slice()); // HTML muutmine
    }
    
    return ( 
    <div>
     <div>{ostukorv.map((element, index) => 
     <div key={index}>
        <span>{element}</span>
        <button onClick={() => eemaldaOstukorvist(index)}>x</button>
        <button onClick={() => lisaOstukorvi(element)}>+</button>
     </div>)}</div>
    </div>
    );
}

export default Ostukorv;