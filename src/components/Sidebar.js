import React from 'react';
import logo from '../assets/img/leaves_icon.svg';
import './Sidebar.css'

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar-container">
                <img src={logo} className="sidebar-logo" alt="logo" />
                <h2 className="sidebar-title">Family Store</h2>
                <div className="sidebar-content">
                    <p>
                        Our friends and family great. This website is a collection of
                        the neat stuff they make. Please support them.
                        {/*Our friends and family are amazing and create some equally amazing things.*/}
                        {/*This website is a way for us to bring together their projects and businesses. Please consider*/}
                        {/*supporting their efforts.*/}
                    </p>
                </div>
                <div className="tag-list">
                    Tags:
                    <span className="tag-list-item">Books</span>
                    <span className="tag-list-item">Toys</span>
                </div>
            </div>
        );
    }
}

export default Sidebar;
