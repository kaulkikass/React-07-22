
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
        localStorage.setItem("tooted",nimiRef.current.value);
        m22raS6num("Toode " + nimiRef.current.value + " lisatud")
    }
    
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