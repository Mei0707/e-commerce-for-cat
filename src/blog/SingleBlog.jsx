import React from 'react'
import blogList from '../utilis/blogdata'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Tags from '../shop/Tags';
import PopularPost from '../shop/PopularPost';

const socialList = [ { link: "#", iconName: "icofont-facebook", className: "facebook", }, 
{ link: "#", iconName: "icofont-twitter", className: "twitter", }, { link: "#", iconName: "icofont-linkedin", className: "linkedin", }, 
{ link: "#", iconName: "icofont-instagram", className: "instagram", }, { link: "#", iconName: "icofont-pinterest", className: "pinterest", }, ];

const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList)
    const {id} = useParams()
    const result = blog.filter((b) => b.id === Number(id))
  return (
    <div>
        <PageHeader title={"Single Blog Page"} curPage={"Blog / Blog Details"}></PageHeader>

        <div className='blog-section blog-single padding-tb section-bg'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className='col-lg-8 col-12'>
                        <article>
                            <div className='section-wrapper'>
                                <div className="row row-cols-1 justify-content-center g-4">
                                    <div className='col'>
                                        <div className='post-item style-2'>
                                            <div className='post-inner'>
                                                {
                                                    result.map((item) => (
                                                        <div key={item.id}>
                                                            <div className='post-thumb'>
                                                                <img src={item.imgUrl} alt="" className='w-100'/>
                                                            </div>

                                                            <div className='post-content'>
                                                                <h3>{item.title}</h3>
                                                                <div className='meta-post'>
                                                                    <ul className='lab-ul'>
                                                                    {
                                                                        item.metaList.map((val, i) => (
                                                                            <li key={i}><i className={val.iconName}></i> {val.text}</li>
                                                                        ))
                                                                    }
                                                                    </ul>
                                                                </div>
                                                                <p>If you're visiting this page, you're likely here because you're searching 
                                                                    for a random sentence. Sometimes a random word just isn't enough, and that 
                                                                    is where the random sentence generator comes into play. By inputting the 
                                                                    desired number, you can make a list of as many random sentences as you want 
                                                                    or need. Producing random sentences can be helpful in a number of different ways.</p>
                                                                
                                                                <blockquote>
                                                                    <p>For writers, a random sentence can help them get their creative juices flowing. 
                                                                        Since the topic of the sentence is completely unknown, it forces the writer 
                                                                        to be creative when the sentence appears. There are a number of different 
                                                                        ways a writer can use the random sentence for creativity. The most common 
                                                                        way to use the sentence is to begin a story. Another option is to include 
                                                                        it somewhere in the story. A much more difficult challenge is to use it to 
                                                                        end a story. In any of these cases, it forces the writer to think creatively 
                                                                        since they have no idea what sentence will appear from the tool.</p>
                                                                    <cite>
                                                                        <a href="#">...Melissa Hunter</a>
                                                                    </cite>
                                                                </blockquote>

                                                                <p>For those writers who have writers' block, this can be an excellent way to 
                                                                    take a step to crumbling those walls. By taking the writer away from the 
                                                                    subject matter that is causing the block, a random sentence may allow 
                                                                    them to see the project they're working on in a different light and 
                                                                    perspective. Sometimes all it takes is to get that first sentence down 
                                                                    to help break the block.</p>
                                                                <img src="/src/asserts/images/blog/single/01.jpg" alt="" />
                                                                <p>If you're visiting this page, you're likely here because you're searching 
                                                                    for a random sentence. Sometimes a random word just isn't enough, and that 
                                                                    is where the random sentence generator comes into play. By inputting the 
                                                                    desired number, you can make a list of as many random sentences as you want 
                                                                    or need. Producing random sentences can be helpful in a number of different ways.</p>

                                                                <div className='video-thumb'>
                                                                    <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                                                    <a href="https://www.youtube.com/watch?v=PGuKjkdGrEI&list=LL&index=4&t=8618s" className='video-button popup'
                                                                    target='_blank'>
                                                                        <i className='icofont-ui-play'></i>
                                                                    </a>
                                                                </div>

                                                                <p>For those writers who have writers' block, this can be an excellent way to 
                                                                    take a step to crumbling those walls. By taking the writer away from the 
                                                                    subject matter that is causing the block, a random sentence may allow 
                                                                    them to see the project they're working on in a different light and 
                                                                    perspective. Sometimes all it takes is to get that first sentence down 
                                                                    to help break the block.</p>

                                                                <div className='tags-section'>
                                                                    <ul className='tags lab-ul'>
                                                                        <li>
                                                                            <a href="#">Agency</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Business</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Personal</a>
                                                                        </li>
                                                                    </ul>
                                                                    <ul className='lab-ul social-icons'>
                                                                        {
                                                                            socialList.map((val, i) => (
                                                                                <li key={i}>
                                                                                    <a href="#" className={val.className}>
                                                                                        <i className={val.iconName}></i>
                                                                                    </a>
                                                                                </li>
                                                                            ))
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className='navigations-part'>
                                        <div className='left'>
                                            <a href="#" className='prev'>
                                                <i className='icofont-double-left'></i> Previous Blog
                                            </a>
                                            <a href="#" className='title'>
                                                Yes! Feel free to use any of the random sentences for any project that you may be doing.
                                            </a>
                                        </div>
                                        
                                        <div className='right'>
                                            <a href="#" className='prev'>
                                                <i className='icofont-double-right'></i> Previous Blog
                                            </a>
                                            <a href="#" className='title'>
                                                Yes! Feel free to use any of the random sentences for any project that you may be doing.
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>


                    <div className='col-lg-4 col-12'>
                        <aside>
                            <Tags/>
                            <PopularPost/>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleBlog