const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 5, chat: body},);
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () =>  ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;