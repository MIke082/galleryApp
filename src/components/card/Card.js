import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import '../../scss/Card.scss';

const Card = () => {
    const history = useHistory();

    const dataCard = useLocation();
    const { title, comments, image } = dataCard.state;
    return (
        <div className='card_page'>
            {dataCard.state !== '' ?
                <div>
                    <img src={image} style={{ flex: 1, height: 200, width: 200 }} alt='img' />
                    <p className='title'> Title: {title}</p>
                    <p> {comments.map((item, index) =>
                    (<div key={index}>
                        <p className='comment'> Comments: </p>
                        <p>{item.name}: {item.comment}</p>
                    </div>
                    ))}
                    </p>
                    <div className='btn'>
                    <Link
                        style={{ textDecoration: 'none', color: 'white', marginTop: 20 }}
                        to='/mainPage'>Back to main page
                    </Link>
                    </div>
                </div>
                :
                history.push('/')
            }
        </div>
    );
};

export default Card;