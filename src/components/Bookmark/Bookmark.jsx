import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    const {bookmarks, readBlogs} = props;

    let spentTime = 0;
    for (const blog of readBlogs){
        console.log(spentTime);
        const readTime = blog?.readTime[0]
        spentTime = spentTime + parseInt(readTime);
    }
    return (
        <div className='bookmark-container'>
            <div className="time-spent">
              <h3>Spent time on read : {spentTime} min</h3>
            </div>
            <div className="bookmarks">
               <h3>Bookmarked Blogs: {bookmarks.length}</h3>
               {
                bookmarks.map(bookmark => <Bookmarked bookmark={bookmark}></Bookmarked>)
               }
            </div>
        </div>
    );
};

const Bookmarked = ({bookmark}) =>{
     return (
        <h4 className='bookmarked-tab'>{bookmark.title}</h4>
     );
} 
export default Bookmark;