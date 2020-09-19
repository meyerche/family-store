import React from 'react';
import './Content.css';
import logo from '../assets/img/ifcatshadthumbs_icon.jpg';

function Content() {
    return (
        <div className="main-feed">
            <article className="card-item">
                <img className="card-icon" src={logo} alt="logo" />
                <div className="card-content">
                    <h4 className="card-title">If Cat's Had Thumbs</h4>
                    <h5 className="card-owner">Cindy Dick</h5>
                    <p className="card-description">Collection of books, stuffies, t-shirts and more.</p>
                    <a href="https://www.ifcatshadthumbs.com" className="card-link">
                        <span className="card-link-desc">IfCatsHadThumbs.com</span>
                    </a>
                </div>
            </article>
        </div>
    );
}

export default Content;
