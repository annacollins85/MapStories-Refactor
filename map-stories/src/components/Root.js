import React from 'react';
import { Provider } from 'react-redux';

import Router from '../Router';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router/>
  </Provider>
);

export default Root;
