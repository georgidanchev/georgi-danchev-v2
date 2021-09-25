import calendar from "../../assets/calendar.svg"
import clock from "../../assets/clock.svg"
import ResponsiveImage from "./ResponsiveImage"

const BlogPost = (props) => {
  const blog_post = props.blog_post

  return (
    <div className="blog-post">
      <div className="blog-post__image-wrap">
        <ResponsiveImage
          image_class="blog-post__image"
          code={process.env.REACT_APP_CLOUDINARY_ID}
          public_id={blog_post.img_name}
          alt={blog_post.img_alt}
        />
      </div>
      <div className="blog-post__wrap">
        <h3 className="blog-post__title">{blog_post.title}</h3>
        <div className="blog-post__label-wraps">
          <p className="blog-post__label">
            <img className="blog-post__icon" src={calendar} alt="calendar icon" />
            <span>2 days ago</span>
          </p>
          <p className="blog-post__label">
            <img className="blog-post__icon" src={clock} alt="clock icon" />
            <span>6 min read</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
