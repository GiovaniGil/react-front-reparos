import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render() { 
        return (
          <nav className='col-md-2 d-none d-md-block bg-light sidebar'>
            <div className='sidebar-sticky'>
              <ul className='nav flex-column'>
                <li className='nav-item'>
                  <a className='nav-link active' href='/'>
                    Dashboard - Reparos{' '}
                    <span className='sr-only'>(current)</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <Link to='/home/reparos' className='nav-link'>
                    Reparos
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/home/equipamentos' className='nav-link'>
                    Equipamentos
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/home/usuarios' className='nav-link'>
                    Usuários
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        );
    }
}
 
export default Sidebar;