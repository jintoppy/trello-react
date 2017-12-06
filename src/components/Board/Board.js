import React, { Component } from 'react';
import './board.css';

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards: []
        };
    }
    componentDidMount() {
        const trello = window.Trello;
        trello.authorize({
            type: 'redirect',
            name: 'Trello',
            scope: {
              read: 'true',
              write: 'true' },
            expiration: 'never',
            success: () => {
                trello.get('/member/me/cards', (cards) => {
                    this.setState({cards});
                }, 
                (error) => console.log('could not get cards'));
            },
            error: () => console.log('auth failure'),
            response_type: 'token',
          });
        
    }
    maybeRenderCards() {
        if(this.state.cards.length > 0) {
            return this.state.cards.map((card, index) => {
                return (
                    <div key={index} className="card">
                        <h5>
                            {card.name}
                        </h5>
                        <a target="_blank" href={card.shortUrl}>View Details</a>
                    </div>
                )
            });
        }
        else {
            return <span>You dont have any cards</span>
        }
    }
    render() {
        return (
            <div>
                <h2> Your cards </h2>
                <div className="card-container">
                    {this.maybeRenderCards()}
                </div>
            </div>
        )
    }
}

export default Board