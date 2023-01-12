const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, post: 'Hi, how are you?', countLike: 8},
        {id: 2, post: 'It\'s my first post', countLike: 5},
        {id: 3, post: 'Elisabet II', countLike: 96},
        {id: 4, post: 'Love cat\'s', countLike: 555}
    ],
    newPostText: "react"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                countLike: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () =>  ({type: ADD_POST})
export const updateNewTextPostActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;