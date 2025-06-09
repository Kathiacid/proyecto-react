import { useState } from "react";
function Interruptor(){
    const[interruptor,setInterruptor]=useState(True);
    function encendido(){
        setInterruptor (True);
    }
    function apagado(){
        setInterruptor(false);
    }
    return(
        <div style={{ textAlign:"center",padding: "20 px",border:"1px solid #ccc", borderRadius: "8px"}}>
            <h2>Switch</h2>
            <h3 style ={{fontSize: "2.5rem", margub:"10px 0"}}>{contador}</h3>
            <div>
                <button onClick={encendido} style={{margin:"5px"}}>incrementar</button>
                <button onClick={apagado} style={{margin:"5px"}}>decrementar</button>
                <span>El </span>
            </div>
        </div>
    )
}