import React from 'react';
import { HashRouter as Router, Route, NavLink  } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import List from './object/user/components/List';
import Index from './object/home/components/Index';
import CreateUser from "./object/user/components/CreateUser";
import client from './client';

function App() {
  return (
      <ApolloProvider client={client.client}>
        <Router>
          <div className="container">
              <div className="row">
                <div className="col col-lg-8">
                <ul className="nav nav-pills  nav-justified">
                  <li className="nav-item">
                    <NavLink exact={true} activeClassName="active" className="nav-link" to="/">Menu</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink  activeClassName="active" className="nav-link" to="/user/list">liste utilisateurs</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact={true} activeClassName="active" className="nav-link" to="/user/create">Créer un utilisateur</NavLink>
                  </li>
                </ul>
                </div>
              </div>
            <br/>
            <div >
              <Route path="/" exact component={Index} />
              <Route path="/user/list" component={List} />
              <Route path="/user/create" exact component={CreateUser} />

            </div>
          </div>
        </Router>
      </ApolloProvider>
  );
}

export default App;
