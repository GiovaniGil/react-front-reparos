import React, { Component } from 'react';
import Sidebar from './sidebar/Sidebar';
import Navbar from './navbar/Navbar';
import Main from '../../router/Main';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar history={this.props.history} />
        <div className='container-fluid'>
          <div className='row content'>
            <Sidebar />
            <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-4'>
              <Main />
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
