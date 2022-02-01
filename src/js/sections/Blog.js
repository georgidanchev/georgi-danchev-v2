import BlogPost from "../components/BlogPost"
import SectionHeader from "../components/SectionHeader"
import data_blog from "../../assets/data-blog.json"

const Blog = () => {
  let blogPosts = []

  data_blog.forEach((blog_post) => {
    blogPosts.push(<BlogPost key={blog_post.id} blog_post={blog_post} />)
  })

  return (
    <section id="blog" className="section section--blogs" data-scroll-section>
      <div className="section-width section-width--padding blog">
        <SectionHeader subtitle="latest posts" title="My Blog Posts" link_title="see more posts" link_url={null} />
        <div className="blog__content">{blogPosts}</div>
      </div>
    </section>
  )
}

export default Blog
