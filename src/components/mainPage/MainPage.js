import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FormModal from '../formModal/FormModal';
import Modal from '../modal/Modal';
import '../../scss/MainPage.scss';

const MainPage = () => {
    const [modalActive, setModalActive] = useState(false);
    const [visibleComments, setVisibleComments] = useState(false);

    const dummyData = useSelector(state => state.data);

    return (
        <>
            <div className="main_page">
                {
                    dummyData.map((item, index) => {
                        const totalComments = Object.keys(item.comments ? item.comments : '').length
                        return (
                            <div className="list_items">
                                <Link
                                    to={{ pathname: `/card/${item.id}`, state: item }}
                                    key={index}>

                                    <img src={item.image} style={{ flex: 1, height: 200, width: 300 }} alt='img' />
                                </Link>
                                <div className="text_content">
                                    <p> Title: {item.title}</p>
                                    {!visibleComments ?
                                        <button onClick={() => setVisibleComments(true)}>

                                            {totalComments} comments
                                        </button>
                                        :
                                        <div >
                                            {item.comments.map((el, ind) => {
                                                return (
                                                    <div key={ind}>
                                                        <p>Name:{el.name} </p>
                                                        <p>Comment: {el.comment}</p>
                                                        <button className="btn_modal"onClick={() => setModalActive(true)}>
                                                            Add new comment
                                                            <Modal active={modalActive} setActive={setModalActive}>
                                                                <div>
                                                                    <FormModal />
                                                                </div>
                                                            </Modal>
                                                        </button>
                                                        <div></div>
                                                        <button onClick={() => setVisibleComments(false)}>Close comments</button>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="btn_add_post">
                <Link to='/addPost/' style={{textDecoration: 'none'}}>Add new post</Link>
            </div>
        </>
    );
};

export default MainPage;