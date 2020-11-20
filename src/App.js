import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import data from './assets/item_data.json';
import {PageView, initGA} from './components/Tracking';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.extractTags = this.extractTags.bind(this);
        this.handleTagSelect = this.handleTagSelect.bind(this);
        this.state = {selectedTag: ''};
    }

    componentDidMount() {
        initGA('G-TVJE31L66S');
        PageView();
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

            </main>
        );
    }
}

export default App;
