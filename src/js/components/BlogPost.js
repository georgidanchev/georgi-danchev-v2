import calendar from "../../assets/calendar.svg"
import clock from "../../assets/clock.svg"
import ResponsiveImage from "./ResponsiveImage"

const BlogPost = (props) => {
  const blog_post = props.blog_post

  const readTimeCalc = () => {
    const text = blog_post.text
    if (!text) return
    const wordsPerMinute = 225
    const words = text.trim().split(/\s+/).length
    const time = Math.ceil(words / wordsPerMinute)
    return time
  }

  const calcPostedDays = (date_str) => {
    const dateArray = date_str.split("/")
    const reFormatedDateStr = `${dateArray[1]}/${dateArray[0]}/${dateArray[2]}`
    const postDate = new Date(reFormatedDateStr)
    return Math.round((new Date() - postDate) / (1000 * 60 * 60 * 24))
  }

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
            <img
              className="blog-post__icon"
              height="15"
              width="15"
              src={calendar}
              alt="calendar icon"
            />
            <span>{calcPostedDays(blog_post.date)} days ago</span>
          </p>
          <p className="blog-post__label">
            <img className="blog-post__icon" height="15" width="15" src={clock} alt="clock icon" />
            <span>{readTimeCalc(blog_post.text)} min read</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
