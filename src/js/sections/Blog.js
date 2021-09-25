import { useRef } from "react"
import BlogPost from "../components/BlogPost"
import SectionHeader from "../components/SectionHeader"
import useIntersection from "../helpers/useIntersection"
import data_blog from "../../assets/data-blog.json"

const Blog = () => {
  const ref_blog = useRef()
  let blogPosts = []

  useIntersection(ref_blog, "blog")

  data_blog.forEach((blog_post) => {
    blogPosts.push(<BlogPost key={blog_post.id} blog_post={blog_post} />)
  })

  return (
    <section ref={ref_blog} id="blog" className="section section--blogs">
      <div className="section-width section-width--padding blog">
        <SectionHeader subtitle="latest posts" title="My Blog Posts" link_url="/" link_title="see more posts" />
        <div className="blog__content">{blogPosts}</div>
      </div>
    </section>
  )
}

export default Blog
