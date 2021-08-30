import calendar from "../../assets/calendar.svg"
import clock from "../../assets/clock.svg"
import ResponsiveImage from "./ResponsiveImage"

const BlogPost = () => {
  return (
    <div className="blog-post">
      <div className="blog-post__image-wrap">
        <ResponsiveImage image_class="blog-post__image" code="v1629540939" public_id="about_cphruk" alt="" />
      </div>
      <div className="blog-post__wrap">
        <h3 className="blog-post__title">Why freelancers are more interested in Full-time jobs?</h3>
        <div className="blog-post__label-wraps">
          <p className="blog-post__label">
            <img className="blog-post__icon" src={calendar} alt="" />
            <span>2 days ago</span>
          </p>
          <p className="blog-post__label">
            <img className="blog-post__icon" src={clock} alt="" />
            <span>6 min read</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
