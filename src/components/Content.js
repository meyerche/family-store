import React from 'react';
import './Content.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { Event } from './Tracking';

class CardItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleLinkClick = this.handleLinkClick.bind(this)
    }

    handleLinkClick(url, title)
    {
        Event('Link', 'Link or Img clicked', title);
        window.location.href = url;
    }

    render() {
        const card = this.props.card;

        return (
            <Card variant="outlined" className="card-item">
                <div className="card-icon">
                    <img src={require('../assets/img/' + card.imgFilename)} alt={card.title}
                         onClick={this.handleLinkClick.bind(this, card.url, card.title)} />
                </div>
                <div className="card-content">
                    <h4 className="card-title">{card.title}</h4>
                    <h5 className="card-owner">{card.owner}</h5>
                    <p className="card-description">{card.description}</p>
                    <Button variant="contained" color="secondary" onClick={this.handleLinkClick.bind(this, card.url, card.title)}>
                        {card.urlDescription}
                    </Button>
                </div>
            </Card>
        );
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.filterCards = this.filterCards.bind(this);
    }

    filterCards() {
        if (this.props.tag !== '')
            return this.props.cards.filter(card => card.tags.includes(this.props.tag));
        else
            return this.props.cards;
    }

    render() {
        let cards = this.filterCards();
        cards = cards.sort((a,b) => {
            if (a.rank > b.rank){
                return 1;
            }
            else if (a.rank < b.rank) {
                return -1;
            }
            else {
                return (a.owner > b.owner ? 1 : -1);
            }
        });

        return (
            <div className="main-feed">
                {cards.map((card) =>
                    <CardItem key={card.id} card={card}/>
                )}
            </div>
        );
    }
}

export default Content;
