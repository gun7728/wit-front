import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'app/containers/App';
import '@picocss/pico';
import { Loading } from 'app/components/common-ui/Loading';
import { Theme } from 'app/components/common-ui/Theme';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <Loading />
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>,
);
