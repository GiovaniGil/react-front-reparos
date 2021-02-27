import React, { Component } from 'react';
import './login.css';
import { login } from '../../arch/services/LoginService';

class Login extends Component {

  constructor(props) {
    super(props);
    this.nomeUsuario = '';
    this.senha = '';
    this.error = '';

    this.state = {
      erro: '',
    };
  }
  entrar(evento) {
    evento.preventDefault();
    evento.stopPropagation();

    let payload = {
      nomeUsuario: this.nomeUsuario,
      senha: this.senha,
    };

    login(payload)
      .then(() => {
        this.props.history.push('/home');
      })
      .catch(() => {
        this.setState({          
          erro: 'Ocorreu um erro ao logar',
        });
      });
  }
  _handleGenerico(evento, campo) {
    evento.stopPropagation();
    this[campo] = evento.target.value;
  }
  render() {
    return (
      <div className='container login-container'>
        <div className='row'>
          <div className='col-md-6 col-sm-12 login-form'>
            <h3>Dashboard - Reparos</h3>

            {this.state.erro.length > 0 && <p>Erro: {this.state.erro} </p>}
            <form onSubmit={this.entrar.bind(this)}>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nome de usuário *'
                  onChange={(evento) =>
                    this._handleGenerico(evento, 'nomeUsuario')
                  }
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Senha *'
                  onChange={(evento) => this._handleGenerico(evento, 'senha')}
                />
              </div>
              <div className='form-group'>
                <input type='submit' className='btnSubmit' value='Entrar' />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;