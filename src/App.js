import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
    return (
        <main role="main" className="main-content">
            <div className="flex-container wrapper">
                <div className="page-sidebar">
                    <aside className="page-sidebar-content">
                        <Sidebar />
                    </aside>
                </div>
                <section className="page-content">
                    <Content />
                </section>
            </div>


            {/*<header className="App-header">*/}
            {/*  <img src={logo} className="App-logo" alt="logo" />*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.js</code> and save to reload.*/}
            {/*  </p>*/}
            {/*  <a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    Learn React*/}
            {/*  </a>*/}
            {/*</header>*/}
        </main>
    );
}

export default App;
