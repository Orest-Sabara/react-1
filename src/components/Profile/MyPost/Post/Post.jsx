import React from "react";
import s from './Post.module.css'    //s-style

const Post = (props) => {

    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1GfTYhj2ARBBdTVzMSVpmx5S8dgp-wnR1mYJRsRWSkq3dHZnteuofKa-h-LQI9Nbv1Bw&usqp=CAU"></img>
            {props.message}
            <div className={s.like}>like {props.like} <span className={s.likeButn}>✅</span></div>
        </div>
    )
}


export default Post;