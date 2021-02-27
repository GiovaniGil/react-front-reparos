import React, { Component } from 'react';
import './equipamentos.css';
import EquipamentosRequest from '../../domain/EquipamentosRequest';

class EquipamentosList extends Component {
  constructor(props) {
    super(props);
    this.requestClass = EquipamentosRequest;
    this.state = {
      arrayEquipamentos: [],
    };
    this.getEquipamentos();
  }

  alterarStatus() {}
  transferir() {}
  editar() {}
  finalizar() {}
  excluirReparo() {}

  getStatus(status) {
    return status === 0 ? 'Iniciar' : status === 1 ? 'Parar' : 'Concluir';
  }

  getEquipamentos() {
    this.requestClass
      .list()
      .then(({ data }) => {
        this.setState({
          arrayEquipamentos: [...data],
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
          <h2 className='h2'>Equipamentos</h2>
          <ul className='navbar-nav px-5'>
            <li className='nav-item text-nowrap'>
              <button type='button' className='btn btn-dark'>
                Novo equipamento
              </button>
            </li>
          </ul>
        </nav>
        <div className='table-responsive'>
          <table className='table table-hover table-sm'>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Identificador</th>
              </tr>
            </thead>
            <tbody>
              {this.state.arrayEquipamentos.map((equipamento, index) => {
                return (
                  <tr key={index}>
                    <td>{equipamento.id}</td>
                    <td>{equipamento.nomeEquipamento}</td>
                    <td>{equipamento.identificador}</td>
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
 
export default EquipamentosList;