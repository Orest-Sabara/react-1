import React from "react";
import MyPost from "./MyPost/MyPost";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";    //s-style



const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPost posts={props.state.posts}
                    addPost={props.addPost}/>
        </div>
    )
}

export default Profile;