import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, post: 'Hi, how are you?', countLike: 8},
            {id: 2, post: 'It\'s my first post', countLike: 5},
            {id: 3, post: 'Elisabet II', countLike: 96},
            {id: 4, post: 'Love cat\'s', countLike: 555}
        ],
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
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        post: postMessage,
        countLike: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree()
}

export default state;