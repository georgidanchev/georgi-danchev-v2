import SectionHeader from "../components/SectionHeader"
import BlogPost from "../components/BlogPost"

const Blog = () => {
  return (
    <section id="blog" className="section section--borders section--blogs">
      <div className="section-width mobile-padding blog">
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
