import * as actionTypes from "../actionTypes"

const initialState = {
    data: [
        {
            id: 1,
            image: '../../images/1.jpg',
            title: 'Mike',
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
            title: 'Nick',
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
            title: 'Anna',
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
        case actionTypes.ADD_NEW_COMMETN:
            const newComment = {
                id: Math.random(),
                image: action.comment.image,
                name: action.comment.name,
                comment: action.comment.comment,
            }
            return {
                ...state,
                data: state.data.concat(newComment),
            }
    }
    return state
}

export default reducer