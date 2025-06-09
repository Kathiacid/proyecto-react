import { useState } from 'react';
function Contador (){
    const [contador,setContador]=useState(0);
    function incrementar (){
        setContador(contador +1);
        
    }
    function decrementar() {
        setContador(contador-1);
    }
    function reiniciar(){
        setContador(0);
    }
    return(
        <div style={{ textAlign:"center",padding: "20 px",border:"1px solid #ccc", borderRadius: "8px"}}>
            <h2>Contador</h2>
            <h3 style ={{fontSize: "2.5rem", margub:"10px 0"}}>{contador}</h3>
            <div>
                <button onClick={incrementar} style={{margin:"5px"}}>incrementar</button>
                <button onClick={decrementar} style={{margin:"5px"}}>decrementar</button>
                <button onClick={reiniciar} style={{margin:"5px"}}>Resetear</button>
            </div>
        </div>
    );
}

export default Contador;