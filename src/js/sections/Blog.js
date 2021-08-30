import { useRef } from "react"
import BlogPost from "../components/BlogPost"
import SectionHeader from "../components/SectionHeader"
import useIntersection from "../helpers/useIntersection"

const Blog = () => {
  const ref_blog = useRef()
  useIntersection(ref_blog, "blog")

  return (
    <section ref={ref_blog} id="blog" className="section section--blogs">
      <div className="section-width section-width--padding blog">
        <SectionHeader subtitle="latest posts" title="My Blog Posts" link_url="/" link_title="see more posts" />
        <div className="blog__content">
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </div>
      </div>
    </section>
  )
}

export default Blog
