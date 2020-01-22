import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../src/style/scss/App.scss';
import 'antd/dist/antd.css';
import FormLogin from './components/FormLogin';
import FormNewUser from './components/FormNewUser';

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path='/' exact={true} component={ FormNewUser } />
        <Route path='/login'exact={true} component={ FormLogin } />
      </Switch>
    </div>
  );
}

export default App;
