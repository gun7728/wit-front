import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'app/containers/App';
import { Loading } from 'app/components/common-ui/Loading';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <Loading />
    <App />
  </React.StrictMode>,
);
