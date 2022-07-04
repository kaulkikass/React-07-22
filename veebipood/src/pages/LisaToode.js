
import { useRef, useState } from "react";

function LisaToode() {
  // kõik ref-d lähevad input külge
  const nimiRef = useRef();
  // useRef --> lugeda inputi väärtust
  // useState --> näidata error / edukat sõnumit

  const [s6num, m22raS6num] = useState("");

  const sisestaToode = () => {
    console.log("tööötab sisestus");
    console.log(nimiRef.current.value);
    //salvestab brauseri lokaalHoidlasse võtmega "tooted" ja väärtusega inputi seest.
    if (nimiRef.current.value === "") {
        m22raS6num("Toodet ei saa lidada, nimi puudub.")
    } else {
/*         localStorage.setItem("tooted",nimiRef.current.value);
        m22raS6num("Toode " + nimiRef.current.value + " lisatud") */
        let tooted = localStorage.getItem("tooted");
        tooted = JSON.parse(tooted) || [];
        tooted.push(nimiRef.current.value);
        tooted = JSON.stringify(tooted);
        localStorage.setItem("tooted",tooted);
        m22raS6num('Toode ' + nimiRef.current.value + ' edukalt lisatud!')
    }
    
    // localStorage pannes kaovad vanad väärtused ära
    //lahendus:
    //1. enne lisamist võtan vanad väärtused ja salvestan nad muutujasse
          // let muutuja = localStorage.getItem("VÕTI");
    //2. jutumärgid ära võtta
          // muutuja = JSON.parse(muutuja);
    //3. muutujasse lisan lisatava väärtuse juurde
          // muutuja.push(uus_nimi);
    //4. jutumärgid tagasi panna
          //muutuja = JSON.stringify(muutuja);
    //5. asendan ära muutuja väärtusega localStorage-s asuvad väärtused
          //  localStorage.setItem("VÕTI", muutuja)

    

    //liiigub > parem klõps -> inspect -> application
  }
return ( 
  <div>
    <br /> <br />
    <label>Toote nimi</label> <br />
    <input ref={nimiRef} type="text" /> <br />
    <button onClick={() => sisestaToode()}>Sisesta</button>
    <div>{s6num}</div>
  </div> 
  );
}

export default LisaToode;