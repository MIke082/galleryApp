import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addComment } from '../../store/action/commentAction';

const initialState = {
    title: "",
    comment: "",
    file: null
};

const AddNewPost = () => {
    const [addNewComment, setAddNewComment] = useState(initialState);

    const dispatch = useDispatch();
    const history = useHistory();

    const createComment = (comment) => dispatch(addComment(comment));

    const fileHandler = event => {
        // console.log(event.target.files[0],'asdkhgasdjh');
        let reader = new FileReader();
        reader.onload = function (e) {
            setAddNewComment({ ...addNewComment, file: e.target.result });
        };
        reader.readAsDataURL(event.target.files[0]);
    };

    const submitHandler = event => {
        event.preventDefault();
        createComment(addNewComment);
        history.push('/mainPage');
        console.log(addNewComment);
        // console.log(createComment(addNewComment));
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

                <input
                    type="file"
                    onChange={fileHandler}
                />

                {/* <textarea
                    className="input"
                    type='text'
                    name='addNewComment'
                    placeholder='Please, add new comment '
                    onChange={(e) => setAddNewComment({ ...addNewComment, comment: e.target.value })}
                /> */}

                <input type="submit" value="send" />


            </form>
            <img src={addNewComment.file} alt={"img"} style={{ height: 200, width: 200 }} />
            {/* {console.log(addNewComment)} */}
        </div>
    );
};

export default AddNewPost;