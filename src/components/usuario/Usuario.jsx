import React, { Component } from 'react';
import UsuarioRequest from '../../domain/UsuarioRequest';

class Usuario extends Component {
  state = {};

  constructor(props) {
    super();
    this.payload = {
      nomeUsuario: '',
      senha: '',
      email: '',
      role: 0,
    };
    this.state = {
      message: '',
    };
  }

  _handleGenerico(evento, campo) {
    evento.stopPropagation();
    this.payload[campo] = evento.target.value;
  }

  salvar(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    UsuarioRequest.save(this.payload)
      .then(() => {
        this.setState({
          message: `Usuário ${this.payload.nomeUsuario} cadastrado com sucesso`,
        });
      })
      .catch((erro) => {
        this.setState({
          message: `Ocorreu um erro ao criar usuário: ${erro}`,
        });
      });
  }
  render() {
    return (
      <div className='container login-container'>
        <div className='row'>
          <div className='col-md-6 col-sm-12 login-form'>
            <h3>Usuário</h3>
            {this.state.message.length > 0 && (
              <p>Erro: {this.state.message} </p>
            )}
            <form onSubmit={this.salvar.bind(this)}>
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
                  type='text'
                  className='form-control'
                  placeholder='E-mail'
                  onChange={(evento) => this._handleGenerico(evento, 'email')}
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
                <label htmlFor='role'>Permissão:</label>
                <select
                  id='role'
                  className='form-control'
                  onChange={(evento) => this._handleGenerico(evento, 'role')}
                >
                  <option value='0'>Usuário</option>
                  <option value='1'>Administrador</option>
                </select>
              </div>
              <div className='form-group'>
                <input type='submit' className='btnSubmit' value='Salvar' />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Usuario;
