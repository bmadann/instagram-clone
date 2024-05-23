import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkIcon from '@mui/icons-material/Bookmark';


function Post({user,postImage, likes, timestamp}) {
  return (
    <div className="post">
        <div className="post__header">
            <div className="post__headerAuthor">
            <Avatar>{user.charAt(0).toUpperCase()}</Avatar> {user} • {" "}
            <span>{timestamp}</span>
            </div>
            <MoreHorizIcon />
            

        </div>
        <div className="post__image">
            <img src={postImage} alt=""  />

        </div>
        <div className="post__footer">
            <div className="post__footerIcons">
                <div className="post__iconMain">
                    <FavoriteBorderIcon className="postIcon"/>
                    <ChatBubbleIcon className="postIcon"/>
                    <TelegramIcon className="postIcon"/>
                </div>
                <div className="post__iconSave">
                <BookmarkIcon className="postIcon"/>

                </div>
            </div>
            Liked by {likes} people.
        </div>
    </div>
  )
}

export default Post