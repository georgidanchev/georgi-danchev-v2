import SectionHeader from "../components/SectionHeader"
import BlogPost from "../components/BlogPost"

const Blog = () => {
  return (
    <div className="section section--borders section--blogs section--clipped section-width blog">
      <SectionHeader subtitle="latest posts" title="My Blog Posts" link_url="/" link_title="see more posts" />
      <div class="blog__content">
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
    </div>
  )
}

export default Blog
