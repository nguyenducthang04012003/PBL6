import React from 'react'
import PropTypes from 'prop-types'
import "./Post.css"

function Post(props) {
  return (
    <div className='article-container'>
      <div className='article-head'>
        <img src="/Image/avt.jpg" alt="avt" className='avtListPost'/>
        <div>
          <p className='namePo'>Email</p>
          <p>Time</p>
        </div>
      </div>
      <div className='article-body'>
        <p>Noi dung</p>
      </div>
      <div>
        <button>Accept</button>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default Post
