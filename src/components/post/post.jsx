import React from 'react'
import "./post.css"

export default function Post({post}) {
  let imgurl="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png";
  if(post.photo){
    const PF="http://localhost:5000/imgs/";
    imgurl=PF+post.photo
  }
  return (
    <div className='post'>
      <img 
        className='postImg'
        src={imgurl}
        alt="" 
      />
      <div className="postInfo">
        <span className="postTitle">
          {post.title}
        </span>
        <hr/>
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className='postDesc'>
        {post.desc}
      </p>
</div>
)
}