import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';

import configureStore from '../store/configureStore';
import initialState from '../initialState';
import song from '../modules/song';

const store = configureStore(initialState);

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path='/' component={} />
            <Route exact path='/song/:url' compoent={song.components.Default} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}
