const BlogPost = () => {
  return (
    <div className="blog-post">
      <img src="https://via.placeholder.com/110" alt="" className="blog-post__image" />
      <div className="blog-post__wrap">
        <h3 className="blog-post__title">Why freelancers are more interested in Full-time jobs?</h3>
        <div className="blog-post__label-wraps">
          <p className="blog-post__label">
            <svg className="blog-post__icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M7 3.25V7H10.75" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>2 days ago</span>
          </p>
          <p className="blog-post__label">
            <svg className="blog-post__icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M7 3.25V7H10.75" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>6 min read</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
