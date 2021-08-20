import calendar from "../../assets/calendar.svg"
import clock from "../../assets/clock.svg"

const BlogPost = () => {
  return (
    <div className="blog-post">
      <img src="https://via.placeholder.com/110" alt="" className="blog-post__image" />
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
