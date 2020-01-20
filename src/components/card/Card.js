import React from 'react';
import './Card.scss';
import { withRouter } from 'react-router-dom';


const Card = ({history, children, title, linkTo}) => {

    const clickHandler = () => {
        history.push(linkTo);
    };

    return (
        <div className="card">
            <div className="card__clickable" onClick={clickHandler}>
                <div className="card__overlay">
                    <div className="card__title"> {title} </div>
                    <div className="card__content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default withRouter(Card);