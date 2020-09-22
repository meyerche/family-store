import React from 'react';
import './Content.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

function CardItem(props) {
    const card = props.card;

    return (
        <Card variant="outlined" className="card-item">
            <div className="card-icon">
                <img src={require('../assets/img/' + card.imgFilename)} alt={card.title} />
            </div>
            <div className="card-content">
                <h4 className="card-title">{card.title}</h4>
                <h5 className="card-owner">{card.owner}</h5>
                <p className="card-description">{card.description}</p>
                <Button variant="contained" color="secondary" href={card.url}>
                    {card.urlDescription}
                </Button>
            </div>
        </Card>
    );
}

function Content(props) {
    console.log(props.cards);
    return (
        <div className="main-feed">
            {props.cards.map((card) =>
                <CardItem key={card.id} card={card}/>
            )}
        </div>
    );
}

export default Content;
