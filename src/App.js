import React from 'react';
import './App.css';
import List from './components/List.js';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import ListName from './components/ListName';

function App() {
  return (
    <div className="App"> {/*This initializes the header */}
      <header className="App-header">
        <div>
          <MyHeader />
        </div>
      </header>
      <main className="App-main"> {/*This is the main component that shows the list */}
        <div>
          <ListName />
          <List />
        </div>
      </main>
      <footer className="App-footer"> {/*This is the footer */}
        <div>
          <MyFooter />
        </div>
      </footer>
    </div>
  );
}

export default App;