import React from 'react';
import s from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={s.itemSide}>
            Friends
            <div className={s.father}>
                <div className={s.child}>
                    <img
                        src="https://www.meme-arsenal.com/memes/e35bba9c3d2095e1fc22a7d9fffe5f24.jpg"></img>
                    <div>Diana</div>
                </div>
                <div className={s.child}>
                    <img
                        src="https://img.freepik.com/premium-psd/3d-illustration-3d-cartoon-avatar-stylish-old-man-with-mustache-cartoon-close-up-portrait-gray-background-3d-avatar-ui-ux_1020-5088.jpg"></img>
                    <div>Viktor</div>
                </div>
                <div className={s.child}>
                    <img
                        src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/191752373/original/1ae4ba7ce21d983de576cf9aaf86ea9f6fe5bf58/create-an-amazing-3d-avatar-in-cartoon-style.png"></img>
                    <div>Igor</div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;