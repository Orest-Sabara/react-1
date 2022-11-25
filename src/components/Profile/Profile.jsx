import React from "react";
import MyPost from "./MyPost/MyPost";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";    //s-style



const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPost posts={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;