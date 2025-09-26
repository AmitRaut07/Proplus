import { blogPosts } from '../../data/blogPosts';
import { Link } from 'react-router-dom';

export default function BlogList() {
  return (
    <div className="blog-list">
      <h2>Latest Articles</h2>
      <div className="blog-grid">
        {blogPosts.map(post => (
          <article key={post.id} className="blog-card">
            <Link to={`/blogs/${post.id}`}>
              <img src={post.image} alt={post.title} className="blog-card-image" />
            </Link>

            <div className="blog-card-content">
              <span className="category">{post.category}</span>
              <h3>
                <Link to={`/blogs/${post.id}`}>{post.title}</Link>
              </h3>
              <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
              <p className="excerpt">
                {post.excerpt.length > 120 ? post.excerpt.slice(0, 120) + '...' : post.excerpt}
              </p>
              <Link to={`/blogs/${post.id}`} className="read-more">Read More →</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
