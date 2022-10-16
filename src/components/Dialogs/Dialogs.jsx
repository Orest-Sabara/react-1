import React from 'react';
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs
        .map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>);

    let messagesElement = props.state.messages
        .map(message => <Message value={message.chat}/>)

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let text = newMessageElement.current.value;
        alert (text);
    }


    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElement}
                </div>
                <div className={s.messages}>
                    {messagesElement}
                    <div className={s.btnSend}>
                        <textarea name="" id="" cols="50" rows="4" ref={newMessageElement}></textarea>
                        <button onClick={ sendMessage }>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;