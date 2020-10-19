import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import data from './assets/item_data.json';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.extractTags = this.extractTags.bind(this);
        this.handleTagSelect = this.handleTagSelect.bind(this);
        this.state = {selectedTag: ''};
    }

    extractTags(items) {
        let tags = [];

        items.forEach(item => {
            tags = [...tags, ...item.tags];
        });

        return tags.filter((item, index) => tags.indexOf(item) === index);
    }

    handleTagSelect(tagName) {
        this.setState({selectedTag: tagName});
    }

    render() {
        const tag = this.state.selectedTag
        return (
            <main role="main" className="main-content">
                <div className="flex-container wrapper">
                    <div className="page-sidebar">
                        <aside className="page-sidebar-content">
                            <Sidebar
                                tags={this.extractTags(data)}
                                onTagSelect={this.handleTagSelect}
                                selectedTag={tag}
                            />
                        </aside>
                    </div>
                    <section className="page-content">
                        <Content cards={data} tag={tag}/>
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
