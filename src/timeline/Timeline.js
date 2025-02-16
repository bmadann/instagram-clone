import React, { useState } from 'react'
import "./Timeline.css"
import Suggestions from './Suggestions'
import Post from './posts/Post'

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "bmandann",
      postImage: "https://images.ctfassets.net/r1kltcpyyy0d/4nEcjFopxnDPk1aufU54Ev/d98a9d1e6f669d9871459d38c22e2ccb/LD23_r0001_064.jpg",
      likes: 12,
      timestamp: "2d",
    },
    {
      user: "longAssignmentEnjoyer",
      postImage: "https://www.motortrend.com/uploads/sites/5/2019/11/2020-Audi-R8-54.jpg",
      likes: 87,
      timestamp: "4h",
    },
    {
      user: "ImSoTired",
      postImage: "https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fyrlehepf75aa1.jpg",
      likes: 49,
      timestamp: "7h",
    },
    {
      user: "BigSwimma",
      postImage: "https://hips.hearstapps.com/hmg-prod/images/red-bull-racings-dutch-driver-max-verstappen-steers-his-car-news-photo-1659046839.jpg",
      likes: 760,
      timestamp: "10d",
    },

  ]);
  
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (<Post  
          user={post.user} 
          postImage={post.postImage} 
          likes={post.likes} 
          timestamp={post.timestamp}/>
        
        ))}

        </div>
        
        
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>

    </div>
  )
}

export default Timeline