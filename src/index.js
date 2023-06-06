// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from 'components/App';
// import './index.css';
// import { Provider } from 'react-redux';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
// import store from './store';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);