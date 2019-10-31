import React from 'react';
import './App.css';
import List from './components/List.js';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import ListName from './components/ListName';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <MyHeader />
        </div>
      </header>
      <main className="App-main">
        <div>
          <ListName />
          <List />
        </div>
      </main>
      <footer className="App-footer">
        <div>
          <MyFooter />
        </div>
      </footer>
    </div>
  );
}

export default App;