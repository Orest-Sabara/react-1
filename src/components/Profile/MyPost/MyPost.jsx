import React from "react";
import s from './MyPost.module.css'    //s-style
import Post from "./Post/Post";
import {updateNewPostText} from "../../../redux/state";

const MyPost = (props) => {

    let postElement = props.posts
        .map( p => <Post message={p.post} like={p.countLike}/>);

    let newPostElement = React.createRef();

    let addPost = ()=> {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postBl}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea cols="50" rows="5" ref={newPostElement}
                              onChange={onPostChange} value={props.newPostText}/>
                    <button onClick={ addPost }>Add new post</button>
                </div>
                <div className={s.posts}>
                    {postElement}
                </div>
            </div>
        </div>
    )
}

export default MyPost;