import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

function Contato(){
    return(
        <div className="home" id="contato">
            <h1>Entre em contato</h1>
            <h2>Telefone: (63) 9 9999-9999</h2>
            <h3>Evoluindo a cada dia!</h3>

            <Link smooth to="#home" style={{color: '#FFF'}}>Ir para Home</Link><br/>
            <Link smooth to="#sobre" style={{color: '#FFF'}}>Ir para Sobre</Link>
        </div>
    );
}

export default Contato;