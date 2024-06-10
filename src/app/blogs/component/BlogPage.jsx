'use client';
import CallToAction from "@/app/call-to-action/callToAction";
import { BLOG_PAGE_SIZE, allExportedApi } from "@/utils/apis/Apis";
import Link from "next/link";
import { useEffect, useState } from "react";
import { emptyImage } from "../../../../public/assets/images";
function BlogPage() {
  let api=allExportedApi() 
  const[blogPageData,setBlogPageData]=useState([])
 

 
  
  const [allBlogPosts, setAllBlogPosts] = useState({ all_categories: [], blogs: [] });
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const { all_categories, blogs } = allBlogPosts;

  const loadAllBlogPosts = async () => {
    try {
      let api = allExportedApi();
      let response = await api.AllBlogPOsts();
     
      setAllBlogPosts(response);
    } catch (error) {
    
    }
  };

  const fetchBlogPageData=async()=>{
    let data = await api.BlogPageApi(); 
    setBlogPageData(data)

  }

  useEffect(() => {
    loadAllBlogPosts();
    fetchBlogPageData()
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); 
  };

  const filteredBlogs = selectedCategory
    ? blogs.filter(blog => blog.blog_category.includes(selectedCategory))
    : blogs;

  

  const totalPages = Math.ceil(filteredBlogs.length / BLOG_PAGE_SIZE);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const paginatedBlogs = filteredBlogs.slice((currentPage - 1) * BLOG_PAGE_SIZE, currentPage * BLOG_PAGE_SIZE);

 

  const renderPaginationButtons = () => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <div className="pagination-buttons">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handleClick(pageNumber)}
            className={pageNumber === currentPage ? 'active' : ''}
            disabled={pageNumber === currentPage}
          >
            {pageNumber}
          </button>
        ))}
         
        
      </div>
    );
  };

  return (
    <>
      <div className="blog-page-outer page_top">
        <div className="blog-page-inner-wrapper">
          {blogPageData && blogPageData.map((data, index) => (
            <div key={index} className="blog-header-section">
              <div className="blog-header-image-heading">
                <div className="blog_img_heading_wrapper">
                  <h2>{data.acf.blog_page_heading}</h2>
                  <img src={data.acf.blog_page_image} alt="blogPageImage" />
                  <span></span>
                </div>
                <div className="blog_page_heading_wrapper">
                  <h1>{data.acf.blog_page_heading}</h1>
                  <div className="blog-header-description">
                <p>{data.acf.blog_page_description}</p>
              </div>
                </div>
              </div>
              
            </div>
          ))}
          <div className="filter_blog_posts">
            <div className="filter_blog_heading">
              <h2>Blogs</h2>
            </div>
            <div className="blog_filter_dropdown">
              <select name="category" id="blog_category" onChange={handleCategoryChange}>
                <option value="">All Blogs</option>
                {all_categories && all_categories.map((category, index) => (
                  <option value={category} key={index}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="blog-posts-section">
            <div className="all-blog-posts-outer">
              {paginatedBlogs.length > 0 ? paginatedBlogs.map((blog) => (
                <ul className="blog-post" key={blog.id}>
                  <Link href={`/blogs/${blog.slug}`}>
                    <li className="blog-post-img">
                      <img src={blog.acf.blog_post_image || emptyImage.src} alt="blog_post_image" />
                    </li>
                    <li className="blog-post-info-wrapper">
                      <h2>{blog.acf.blog_post_tittle.slice(0,60)}...</h2>
                      <p>
                        <span>{blog.acf.post_by_}</span>
                        <span>{formatDate(blog.date)}</span>
                      </p>
                    </li>
                  </Link>
                </ul>
              )) : (
                <p id="no_blogs_found">No blogs available.</p>
              )}
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="pagination-controls">
            {filteredBlogs.length > BLOG_PAGE_SIZE && renderPaginationButtons()}
          </div>
        </div>
      </div>
      <div className="call_outer inner_blogs blog_page_call_to_action">
        <div className="inner_call">
          <CallToAction />
        </div>
      </div>
    </>
  );
}

export default BlogPage;