import React from 'react';
import UsuariosList from '../components/usuario/UsuariosList';
import { Switch, Route } from 'react-router-dom'
import ReparosList from '../components/reparos/ReparosList';
import EquipamentosList from '../components/equipamentos/EquipamentosList';

const Main = () => (
  <Switch>
    <Route exact path='/home/' component={ReparosList} />
    <Route path='/home/usuarios' component={UsuariosList} />
    <Route path='/home/reparos' component={ReparosList} />
    <Route path='/home/equipamentos' component={EquipamentosList} />
  </Switch>
);

export default Main;