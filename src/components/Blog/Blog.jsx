import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';


const Blog = (props) => {
    const {blog, handleBookmark, handleReadTime} = props ;
    const {coverImage, author, authorImage, publishDate, readTime, title, hashtags} = blog;

    const postDate = new Date(publishDate).getTime();
    const currentDate = new Date().getTime();
    const elapsedTime = currentDate - postDate;
    const daysElapsed = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const weeksElapsed = Math.floor(daysElapsed / 7);
    const monthsElapsed = Math.floor(daysElapsed / 30);


    return (
           <div className='blog-card'>
              <img src={coverImage} alt="" />

              <div className="author-details">
                <div className="author">
                <img src={authorImage} alt="" />
                <div>
                    <h3 style={{"color": "#111111"}}>{author}</h3>
                    <p className='publish-date'>{publishDate} <br /> [{daysElapsed < 30 ? daysElapsed : weeksElapsed < 7 ? weeksElapsed : monthsElapsed + " months ago"}]</p>
                </div>
              </div>
                <div className='read-time'>
                <p onClick={() => handleBookmark(blog)}>{readTime} min to read <FontAwesomeIcon icon={faBookmark} className='bookmark-handler'/></p>
                </div>
              </div>

              <h2>{title}</h2>
              <p className='hashtag'>#{hashtags.join('   #')}</p>
              <button onClick={() => handleReadTime(blog)}>Mark as read</button>
           </div>
    );
};

export default Blog;