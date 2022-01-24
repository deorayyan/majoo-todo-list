import React from 'react';
import { Provider } from 'react-redux';
import myStore from './redux/store';

import Main from './views/Main';

function App() {
  let store = myStore;

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
