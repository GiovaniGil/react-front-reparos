import React, { Component } from 'react';
import { logout } from '../../../arch/services/LoginService';
import { getToken } from '../../../arch/services/LocalStorageService';
import { decode } from 'jsonwebtoken';

class Navbar extends Component {
  constructor(props) {
    super();    
    this.state = {
      decodedJwt: decode(getToken()),
    }
  }
  sair() {
    logout(this.props);
  }
  render() {
    return (
      <nav className='navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow'>
        <a className='navbar-brand col-sm-3 col-md-2 mr-0' href='/'>
          Master - Teste
        </a>
        <ul className='navbar-nav px-3'>
          <li className='nav-item text-nowrap'>
            <span className="mr-5 white-text">Olá {this.state.decodedJwt[Object.keys(this.state.decodedJwt)
              .find(el => el.includes('email'))]}
            </span>
            <button
              type='button'
              className='btn btn-dark'
              onClick={this.sair.bind(this)}
            >
              Sair
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}


export default Navbar;