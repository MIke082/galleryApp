import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

const Card = () => {
    const history = useHistory();

    const dataCard = useLocation();
    const { title, comments, image } = dataCard.state;
    return (
        <div>
            {dataCard.state !== '' ?
                <div>
                    <img src={image} style={{ flex: 1, height: 200, width: 200 }} alt='img' />
                    <p> Title: {title}</p>
                    <p> {comments.map((item, index) =>
                    (<div key={index}>
                        <p> Comments: </p>
                        <p>{item.name}: {item.comment}</p>
                        <p></p>
                        </div>
                        ))}
                    </p>
                    <Link to='/mainPage'>Back to main page</Link>
                </div>
                :
                history.push('/')
            }
        </div>
    );
};

export default Card;