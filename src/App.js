import React, { Component } from 'react';
import './App.css';
import Login from './components/login/Login';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/home/Home';
import { getToken } from './arch/services/LocalStorageService';
class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/login' component={Login} />
        <Route
          path='/'
          render={() => {
            return getToken() !== null ? (
              <Redirect to='/home' />
            ) : (
              <Redirect to='/login' />
            );
          }}
        />
        <Route render={() => <h1>Erro - Não encontrada</h1>} />
      </Switch>
    );
  }
}

export default App;
