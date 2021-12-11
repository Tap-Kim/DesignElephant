import React from 'react';
import Main from './Component/Main';
import MessageContextProvider from './Context/MessageContextProvider';

function App() {
  return (
    <div className="App">
      <MessageContextProvider>
        <Main />
      </MessageContextProvider>
    </div>
  );
}

export default App;
