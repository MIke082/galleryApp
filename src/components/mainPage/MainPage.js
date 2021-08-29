import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';

const MainPage = () => {
    // const nameOfUser = useLocation();
    // const { state } = nameOfUser
    // console.log(state, ' state');

    const dummyData = useSelector(state => state.data);
    console.log(dummyData, 'dummyData');


    return (
        <div>
            {
                dummyData.map((item, index) => {
                    // const total = item.comments.reduce((prev, next) => prev + next.comment, 1);
                    // console.log(total);
                    // console.log(item.comments);
                    const total = Object.keys(item.comments).length
                    
                return(
                    <Link
                        to={{ pathname: `/card/${item.id}`, state: item }}
                        key={index}>
                        <p> Title: {item.title}</p>
                        <img src={item.image} style={{ flex: 1, height: 200, width: 200 }} alt='img' />
                        {/* <p> Comment: {item.comments}</p> */}
                        <p>{total} comments</p>
                        <div>
                            {/* <NavLink to={`/addComment/${item.id}`}>Add comment</NavLink> */}
                        </div>

                    </Link>
                )})
            }
        </div>
    );
};

export default MainPage;