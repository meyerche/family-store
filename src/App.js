import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import data from './assets/item_data.json';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.extractTags = this.extractTags.bind(this);
    }

    extractTags(items) {
        let tags = [];

        items.forEach(item => {
            tags = [...tags, ...item.tags];
        });

        return tags.filter((item, index) => tags.indexOf(item) === index);
    }

    render() {
        return (
            <main role="main" className="main-content">
                <div className="flex-container wrapper">
                    <div className="page-sidebar">
                        <aside className="page-sidebar-content">
                            <Sidebar tags={this.extractTags(data)}/>
                        </aside>
                    </div>
                    <section className="page-content">
                        <Content cards={data}/>
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
}

export default App;
