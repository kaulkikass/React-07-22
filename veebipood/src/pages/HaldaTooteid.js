// 1. Võtame localstoragest koik tooted
//2. võtame localstorage toodetelt jutumärgid või anname tühja massiivi kui ta saab jutumärke ära võttes errori
//3. kuvame htmls .map() abil tooted
//4. teeme igaühe osas kaks nuppu - kustutua ja muudaa
//5. ühe nupuga sidumine- kustuta funktsionn
//6. kustutame localstorages - html prg uueneb peale refreshi
//7. muudame muutuja ära usestate peale
//8. pärast kustutamist uuendaTooted(); uuendame ka htmli
//9. muuda nupule paneme Link ümber ja võimaldame minna muutma - saadame nime URLi
//10. muuuda fail, muuda seosed URL osas jne
import {useState} from 'react';
import { Link } from 'react-router-dom';

function HaldaTooteid() {
    const [tooted, uuendaTooted] = useState(JSON.parse(localStorage.getItem("tooted")) || []);
    const [n2itanAktiivseid, setN2itanAktiivseid] = useState(false);

    const kustuta = (index) => {
        tooted.splice(index,1);
        localStorage.setItem('tooted', JSON.stringify(tooted));
        uuendaTooted(tooted.slice());
    }

const aktiivsed = () => {
    const filtreeritudTooted = tooted.filter(element => element.aktiivne === true);
    uuendaTooted(filtreeritudTooted);
    setN2itanAktiivseid(true);
}

const n2itaK6iki = () => {
    uuendaTooted(JSON.parse(localStorage.getItem("tooted")));
    setN2itanAktiivseid(false);
}

    return ( 
    <div>
        {n2itanAktiivseid === false && <button onClick={() => aktiivsed()}>Näita vaid aktiivseid</button>}
        {n2itanAktiivseid === true && <button onClick={() => n2itaK6iki()}>Näita kõiki</button>}
        {tooted.map((element, index) => 
        <div>
            <div>{element.nimi}</div>
            <div>{element.hind}</div>
            <button onClick={() => kustuta(index)}>X</button>
            <Link to={"/muuda/" + element.nimi}>
                <button>Muuda</button>
            </Link>
        </div>)}
    </div> );
}

export default HaldaTooteid;