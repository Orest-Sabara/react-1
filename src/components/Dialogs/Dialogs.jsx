import React from 'react';
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().messagesPage;

    let dialogsElement = state.dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>);
    let messagesElement = state.messages.map(message => <Message value={message.chat}/>)
    let newMessageBody = state.newMessageBody;
    // let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (ev) => {
        let body = ev.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }


    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElement}
                </div>
                <div className={s.messages}>
                    <div>{messagesElement}</div>
                    <div className={s.btnSend}>
                        <textarea cols={30} rows={4}
                                  value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder='Enter your message...'></textarea>
                        <button onClick={ onSendMessageClick }>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;