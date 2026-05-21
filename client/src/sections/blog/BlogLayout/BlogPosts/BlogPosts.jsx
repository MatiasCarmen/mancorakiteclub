import BlogCard from './BlogSidebar/BlogCard.jsx'
import LoadMorePosts from '../../../../components/blog/LoadMorePosts.jsx'
import { POSTS } from '../blogContent.js'

function BlogPosts() {
  return (
    <LoadMorePosts
      posts={POSTS}
      getKey={(post) => post.slug}
      renderPost={(post) => (
        <BlogCard
          slug={post.slug}
          category={post.category}
          title={post.title}
          date={post.date}
          author={post.author}
          image={post.image}
          desktopImage={post.desktopImage}
          mobileImage={post.mobileImage}
        />
      )}
    />
  )
}

export default BlogPosts
