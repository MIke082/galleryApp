import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addPost } from '../../store/action/commentAction';
import '../../scss/AddNewPost.scss';

const initialState = {
    title: "",
    file: null
};

const AddNewPost = () => {
    const [addNewPost, setAddNewPost] = useState(initialState);

    const dispatch = useDispatch();
    const history = useHistory();

    const createPost = (comment) => dispatch(addPost(comment));

    const fileHandler = event => {
        let reader = new FileReader();
        reader.onload = function (e) {
            setAddNewPost({ ...addNewPost, file: e.target.result });
        };
        reader.readAsDataURL(event.target.files[0]);
    };

    const submitHandler = event => {
        event.preventDefault();
        createPost(addNewPost);
        history.push('/mainPage');
    };

    return (
        <div className="add_new_post_page">
            <div>
                <img src={addNewPost.file} alt={"img"} style={{ height: 200, width: 200 }} />
            </div>
            <form onSubmit={submitHandler}>
                <input
                    className="input"
                    type='text'
                    placeholder='Please, add new title...'
                    name='title'
                    onChange={(e) => setAddNewPost({ ...addNewPost, title: e.target.value })}
                />

                <input
                    type="file"
                    onChange={fileHandler}
                />

                <input type="submit" value="Send" />

            </form>
            

        </div>
    );
};

export default AddNewPost;