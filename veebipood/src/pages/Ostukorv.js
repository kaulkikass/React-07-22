import { useState } from 'react';


function Ostukorv() {

    const eestiKeel = () => {
        localStorage.setItem('veebilehe_keel', 'eesti');
    }

    const ingliseKeel = () => {
        localStorage.setItem('veebilehe_keel', 'inglise');
    }

    const veneKeel = () => {
        localStorage.setItem('veebilehe_keel', 'vene');
    }

    const [keel, muudaKeel] = useState(localStorage.getItem('veebilehe_keel'));

    return ( 
    <div>
     <div>Ostukorvi leht</div> 
     <img src="/....faili nimi" alt="" />
     <button onClick={() => {eestiKeel(); muudaKeel('eesti')}}>Eesti keel</button>
     <button onClick={() => {ingliseKeel(); muudaKeel('inglise')}}>Inglise keel</button>
     <button onClick={() => {veneKeel(); muudaKeel('vene')}}>Vene keel</button>
     {keel ==='eesti' && <div>Leht on eestikeelne</div>}
     {keel === 'inglise' && <div>Page is in English</div>}
     {keel === 'vene' && <div>Leht on venekeelne</div>}
    </div>
    );
}

export default Ostukorv;