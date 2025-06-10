import { useState } from "react";
function Interruptor(){
    const[interruptor,setInterruptor]=useState(true);
    function encendido(){
        setInterruptor (true);
        alert("Encendido")
    }
    function apagado(){
        setInterruptor(false);
        alert("Apagado")
    }
    return(
        <div style={{ textAlign:"center",padding: "20 px",border:"1px solid #ccc", borderRadius: "8px"}}>
            <h2>Switch</h2>
            <h3 style ={{fontSize: "2.5rem", margin:"10px 0"}}>{interruptor}</h3>
            <div>
                <button onClick={encendido} style={{margin:"5px"}}>On</button>
                <button onClick={apagado} style={{margin:"5px"}}>Off</button>
            </div>
        </div>
    )
}

export default Interruptor;