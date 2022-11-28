const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi, how are you?', countLike: 8},
                {id: 2, post: 'It\'s my first post', countLike: 5},
                {id: 3, post: 'Elisabet II', countLike: 96},
                {id: 4, post: 'Love cat\'s', countLike: 555}
            ],
            newPostText: "react"
        },
        messagesPage: {
            messages: [
                {id: 1, chat: 'Hi!'},
                {id: 2, chat: 'Hello, watch do you do?'},
                {id: 3, chat: 'you live in London ?'},
                {id: 4, chat: 'Today is raining.'},
            ],
            dialogs: [
                {id: 1, name: 'Orest'},
                {id: 2, name: 'Diana'},
                {id: 3, name: 'Romeo'},
                {id: 4, name: 'Igor'},
                {id: 5, name: 'Max'},
                {id: 6, name: 'Viktor'}
            ],
            newMessageBody: ''
        },
        sidebar: {

        }
    },
    _callSubscribe () {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe (observer) {
        this._callSubscribe = observer;
    },

    dispatch (action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                countLike: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscribe(this._state)
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscribe(this._state)
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscribe(this._state);
        }
        else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = '';
            this._state.messagesPage.messages.push({id: 5, chat: body},);
            this._callSubscribe(this._state);
        }
    }
}

export const addPostActionCreator = () =>  ({type: ADD_POST})
export const updateNewTextPostActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () =>  ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default store;
window.store = store;


