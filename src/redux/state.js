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
        },
        sidebar: {

        }
    },
    getState() {
        return this._state
    },
    callSubscribe () {
        console.log('state changed')
    },
    addPost () {
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            countLike: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscribe(this._state)
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscribe(this._state)
    },
    subscribe (observer) {
        this._callSubscribe = observer;
    },
}

export default store;

window.store = store;