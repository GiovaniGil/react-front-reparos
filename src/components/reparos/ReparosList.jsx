import React, { Component } from 'react';
import ReparosRequest from '../../domain/ReparosRequest';
import Moment from 'moment';
import './reparos.css';

class ReparosList extends Component {
  constructor(props) {
    super(props);
    this.requestClass = ReparosRequest;
    this.state = {
      arrayReparos: [],
    };
    this.getReparos();
  }

  alterarStatus() {}
  transferir() {}
  editar() {}
  finalizar() {}

  excluirReparo(id) {
    this.requestClass
      .remove(id)
      .then(() => {
        this.message = 'Reparo excluído com sucesso!';
        this.getReparos();
      })
      .catch((erro) => {
        this.message = 'Ocorreu um erro ao excluir o Reparo: ' + erro;
      });
  }

  getStatus(status) {
    return status === 0 ? 'Iniciar' : status === 1 ? 'Parar' : 'Concluir';
  }

  getReparos() {
    this.requestClass.list()
      .then(({ data }) => {
        this.setState({
          arrayReparos: [...data],
        });
      })
      .catch(({ response }) => {
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
          <h2 className='h2'>Reparos</h2>
          <ul className='navbar-nav px-5'>
            <li className='nav-item text-nowrap'>
              <button type='button' className='btn btn-dark'>
                Novo reparo
              </button>
            </li>
          </ul>
        </nav>

        <div className='table-responsive'>
          <table className='table table-hover table-sm'>
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th>Início reparo</th>
                <th>Equipamento</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.arrayReparos.map((reparo, index) => {
                return (
                  <tr key={index}>
                    <td>{reparo.id}</td>
                    <td>
                      <button
                        type='button'
                        className='btn btn-info'
                        onClick={this.alterarStatus()}
                      >
                        {this.getStatus(reparo.statusReparo)}
                      </button>
                    </td>
                    <td>
                      {Moment(reparo.dataInicio).format('DD/MM/YYYY HH:mm')}
                    </td>
                    <td>{reparo.equipamento.nomeEquipamento}</td>
                    <td>
                      <button
                        type='button'
                        className='btn btn-warning mr-4 mb-1'
                        onClick={this.transferir()}
                      >
                        Transferir
                      </button>
                      <button
                        type='button'
                        className='btn btn-primary mr-4 mb-1'
                        onClick={this.editar()}
                      >
                        Editar
                      </button>
                      <button
                        type='button'
                        className='btn btn-danger'
                        onClick={() => {
                          this.excluirReparo(reparo.id);
                        }}
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
 
export default ReparosList;