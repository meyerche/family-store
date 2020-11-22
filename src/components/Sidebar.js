import React from 'react';
import logo from '../assets/img/leaves_icon.svg';
import './Sidebar.css'
import Button from '@material-ui/core/Button';
import { Event } from './Tracking';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.handleTagSelect = this.handleTagSelect.bind(this);
        this.setButtonColor = this.setButtonColor.bind(this);
    }

    handleTagSelect(e) {
        let selected = e.target.textContent.toLowerCase();

        if (selected === 'all')
            selected = '';
        else {
            Event('Filter', 'Category tag selected', selected);
        }

        this.props.onTagSelect(selected);
    }

    setButtonColor(tagName) {
        if (tagName === this.props.selectedTag)
            return "secondary";
        else
            return "primary";
    }

    render() {
        let tags = this.props.tags;
        tags.unshift("all");

        return (
            <div className="sidebar-container">
                <img src={logo} className="sidebar-logo" alt="logo"/>
                <h1 className="sidebar-title">The Family Outpost</h1>
                <div className="sidebar-content">
                    <p>
                        Our friends and family are great. This website is a collection of
                        the neat stuff they make. Please support them.
                        {/*Our friends and family are amazing and create some equally amazing things.*/}
                        {/*This website is a way for us to bring together their projects and businesses. Please consider*/}
                        {/*supporting their efforts.*/}
                    </p>
                </div>

                <div className="tag-list-header">Categories:</div>
                <div className="tag-list-container">
                    <div className="tag-list">
                        {this.props.tags.map((tag) =>
                            <Button key={tag.indexOf} variant="contained" color={this.setButtonColor(tag)}
                                    size="small" className="tag-list-item" onClick={this.handleTagSelect}>
                                {tag}
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;
