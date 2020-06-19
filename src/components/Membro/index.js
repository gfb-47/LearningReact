import React, { Component } from 'react';

class Membro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: true
        };
        this.sair = this.sair.bind(this);
        this.entrar = this.entrar.bind(this);
    }

    sair() {
        this.setState({status:false});
    }

    entrar() {
        this.setState({status:true});
    }

    // ? = se true and : = se false
    render() {
        return (
            <div>
                {this.state.status ?
                <div>
                    <h2>Bem Vindo ao sistema</h2>
                    <button onClick={this.sair}>Sair</button>
                </div> : 
                <div>
                    <h2>Olá visitante, faça o login!</h2>
                    <button onClick={this.entrar}>Entrar no sistema</button>
                </div>
                }                
            </div>
        );
    }
}

export default Membro;