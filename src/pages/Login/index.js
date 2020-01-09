import React from 'react';
import api from '../../services/api';

import './style.css';

export default class Login extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        }
    }

    async handleClick() {
        const response = await api.post('/login', { username: this.state.username });

        const { _id } = response.data;

        localStorage.setItem('user', _id);

        this.props.history.push('/dashboard');
    }

    render() {
        let { username } = this.state;
        console.log(username);
        return (
        <div className="content">
            <div className="box-login">
            <div>
                <img className="logo" alt="teste" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" />
            </div>
            <form className="form-login" action="">
                <div className="label-login">
                    <div className="span-input">Usuário de telefone, nome de usuário ou email</div>
                    <input className="input-login" type="text" value={username} onChange={(e) => this.setState({username: e.target.value})}/>    
                </div> 
                <button className="button-login" onClick={this.handleClick}>Entrar</button>
            </form>
            <div className="divider">
                <div className="divider-line divider-left"></div>
                <div className="divider-text">OU</div>
                <div className="divider-line divider-right"></div>
            </div>
            <div className="login-facebook">
                <span>Entrar com Facebook</span>
            </div>
            <div className="forgot-password">
                <a href="http://globo.com">Esqueceu a Senha</a>
            </div>
            </div>
            <div className="sign-up">
                <span>Não tem uma conta? <a href="http">Cadastre-se</a></span>                    
            </div>
        </div>
        )        
    }
}
