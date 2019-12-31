import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'components/App';

import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.hydrate(
  <App initialData={window.__R_DATA.initialData} />,
  document.getElementById('root')
);
