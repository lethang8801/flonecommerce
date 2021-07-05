import React from 'react'
import { listBlog } from '../components/Data/ListData'
import '../components/css/Blog.css'

function Blog() {
    return (
        <div className="list-blog">
            <h3>OUR BLOG</h3>
            <div className="blogs">
                {
                    listBlog.map((item) =>
                        <div className="item-blog">
                            <img src={item.src} alt="img" className="img-blog"/>
                            <div className="blog-title">
                                <h4>
                                    {item.title}
                                </h4>
                                <p>
                                    {item.name}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Blog
