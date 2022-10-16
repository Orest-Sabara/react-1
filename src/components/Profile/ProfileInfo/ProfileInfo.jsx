import React from "react";
import s from './ProfileInfo.module.css'    //s-style

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img alt='' src="https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_960_720.jpg"/>
            </div>
            <div className={s.descriptionBlok}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;