import React, { useEffect, useState } from 'react';
import './BlogContainer.css'
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BlogContainer = () => {
    const [blogs, setBlogs] = useState([]);

    // state for handle Bookmarks
    const [bookmarks, setBookmarks] = useState([]);

    // state for handle Read Time
    const [readBlogs, setReadBlogs] = useState([]);


    useEffect(() =>{
       const loadData = async () =>{
        const resp = await fetch('data.json')
        const data = await resp.json()
        setBlogs(data.blogs)
       }
       loadData()
    },[])

    const handleBookmark = (blog) =>{
        let newArrayOfBookmarks;
        const exist = bookmarks.find(bookmark => bookmark.id === blog.id);
        if (!exist){
          newArrayOfBookmarks = [...bookmarks, blog]
          setBookmarks(newArrayOfBookmarks);
        }
        else{
          console.log('added');
          toast('This Blog has been added to bookmark!!');
        }
    }

    const handleReadTime = (blog) =>{
        let newArrayOfReadBlogs = [...readBlogs, blog];
        setReadBlogs(newArrayOfReadBlogs);
    }

    console.log(blogs);
    return (
        <div className='blog-container'>
            <div className="blogs">
              {
                blogs.map(blog => <Blog
                   blog={blog} 
                   key= {blog.id}
                   handleBookmark = {handleBookmark}
                   handleReadTime = {handleReadTime}
                   ></Blog>)
              }
            </div>
            <div className="bookmark-section">
               <Bookmark 
                  bookmarks={bookmarks}
                  readBlogs = {readBlogs}
                ></Bookmark>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default BlogContainer;


