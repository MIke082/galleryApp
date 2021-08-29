import * as actionTypes from "../actionTypes"

const initialState = {
    data: [
        {
            id: 1,
            image: '../../images/1.jpg',
            title: 'New York',
            comments: [
                {
                    'name': 'Nick',
                    'comment': 'Very good',
                },
                {
                    'name': 'John',
                    'comment': 'Very Nice',
                },
                {
                    'name': 'Anna',
                    'comment': 'Very good good',
                }
            ]
        },
        {
            id: 2,
            image: '../../images/2.jpg',
            title: 'Tbilisi',
            comments: [
                {
                    'name': 'Nick',
                    'comment': 'Very good',
                }
            ]
        },
        {
            id: 3,
            image: '../../images/3.jpg',
            title: 'Chicago',
            comments: [
                {
                    'name': 'Nick',
                    'comment': 'Very good',
                },
                {
                    'name': 'Nick',
                    'comment': 'Very good',
                }
            ]
        }
    ],

}

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case actionTypes.ADD_NEW_POST:
            const newPost = {
                id: Math.random(),
                image: action.post.image,
                title: action.post.title,
                comment: action.post.comment,
            }
            return {
                ...state,
                data: state.data.concat(newPost),
            }

        case actionTypes.ADD_NEW_POST:
            return { ...state, posts: [...state.posts.filter(p => p !== state.data), { ...state.data, comments: 1 }] };

    }

    return state
}

export default reducer