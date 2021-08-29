import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../../store/action/commentAction';
import '../modal/modal.scss';

const FormModal = () => {
    const [addNewComment, setAddNewComment] = useState('');
    const dispatch = useDispatch();

    const createComment = (comment) => dispatch(addComment(comment));

    const submitHandler = event => {
        event.preventDefault();
        createComment(addNewComment);
    };


    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    className="input"
                    type='text'
                    placeholder='Please, add new title...'
                    name='title'
                    onChange={(e) => setAddNewComment({ ...addNewComment, title: e.target.value })}
                />

                <input type="submit" value="send" />
                
            </form>
        </div>
    );
};

export default FormModal;