import React, { Component } from 'react';
import UsuarioRequest from '../../domain/UsuarioRequest';

class UsuariosList extends Component {
  state = {};

  constructor(props) {
    super();
    this.requestClass = UsuarioRequest;
    this.state = {
      arrayUsuarios: [],
    };
    this.message = '';
    this.getUsuarios();
  }

  editar(id) {
    this.requestClass
      .get(id)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((erro) => {
        this.message = 'Ocorreu um erro ao recuperar o usuário: ' + erro;
      });
  }
  
  excluirUsuario(id) {
    this.requestClass
      .remove(id)
      .then(() => {
        this.message = 'Usuário excluído com sucesso!';
        this.getUsuarios();
    })
      .catch((erro) => {
        this.message = 'Ocorreu um erro ao excluir o usuário: ' + erro;
      });
  }

  getUsuarios() {
    this.requestClass.list()
        .then(({ data }) => {
        this.setState({
          arrayUsuarios: [...data],
        });
      })
      .catch((response) => {
        if ([401, 403].includes(response.status)) {
          this.props.history.push('/');
        }
      });
  }
  render() {
    return (
      <div>
        <div className='mt-5'></div>
        <nav className='navbar navbar-dark flex-md-nowrap p-0 mb-5'>
          <h2 className='h2'>Usuários</h2>
          <ul className='navbar-nav px-5'>
            <li className='nav-item text-nowrap'>
              <button type='button' className='btn btn-dark'>
                Novo Usuário
              </button>
            </li>
          </ul>
        </nav>
        <div className='table-responsive'>
          <table className='table table-hover table-sm'>
            <thead>
              <tr>
                <th>#</th>
                <th>Usuario</th>
                <th>E-mail</th>
                <th>Role</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.arrayUsuarios.map((usuario, index) => {
                return (
                  <tr key={index}>
                    <td>{usuario.id}</td>
                    <td>{usuario.nomeUsuario}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.role === 0 ? 'Usuário' : 'Admin'}</td>
                    <td>
                      <button
                        type='button'
                        className='btn btn-primary mr-4 mb-1'
                        onClick={() => this.editar(usuario.id)}
                      >
                        Editar
                      </button>
                      <button
                        type='button'
                        className='btn btn-danger'
                        onClick={() =>
                          this.excluirUsuario(usuario.id)
                        }
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UsuariosList;
