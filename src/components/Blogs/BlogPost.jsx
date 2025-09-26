import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.id === slug);

  useEffect(() => {
    if (!post) return;

    // ---- SEO Meta Tags ----
    document.title = post.meta?.title || `${post.title} | Your Pest Control Service`;

    const setMeta = (name, content, property = false) => {
      let selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.head.querySelector(selector);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        if (property) meta.setAttribute('property', name);
        else meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    setMeta('description', post.meta?.description || post.excerpt);
    setMeta('keywords', post.meta?.keywords.join(', ') || post.category);

    // Open Graph
    setMeta('og:title', post.title, true);
    setMeta('og:description', post.excerpt, true);
    setMeta('og:type', 'article', true);
    setMeta('og:image', post.image, true);
    setMeta('og:url', window.location.href, true);

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', post.title);
    setMeta('twitter:description', post.excerpt);
    setMeta('twitter:image', post.image);

    // ---- JSON-LD FAQ Schema ----
    const faqs = post.content
      .filter(c => c.type === 'faq')
      .map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }));

    // Remove old FAQ script if exists
    const oldScript = document.getElementById('faq-json-ld');
    if (oldScript) oldScript.remove();

    if (faqs.length > 0) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'faq-json-ld';
      script.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs
      });
      document.head.appendChild(script);
    }

  }, [post]);

  if (!post) return (
    <div className="not-found">
      <h2>Post not found</h2>
      <Link to="/blogs" className=".back-link-notfound">← Back to all posts</Link>
    </div>
  );

  return (
    <article className="blog-post">
      <header>
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span className="category">{post.category}</span>
          <span className="date">{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <img src={post.image} alt={post.title} className="post-image" />
      </header>

      <div className="post-content">
        {post.content.map((section, i) => {
          switch (section.type) {
            case 'paragraph':
              return <p key={i}>{section.text}</p>;

            case 'heading':
              return <h2 key={i}>{section.text}</h2>;

            case 'list':
              return (
                <ul key={i}>
                  {section.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              );

            case 'faq':
              return (
                <div key={i} className="faq-item">
                  <strong>{section.question}</strong>
                  <p>{section.answer}</p>
                </div>
              );

            case 'cta':
              return (
                <div key={i} className="cta-section">
                  <Link to={section.link} className="cta-button">{section.text}</Link>
                </div>
              );

            default:
              return null;
          }
        })}
      </div>

      <div className="post-footer">
        <Link to="/blogs" className="back-link">← Back to all posts</Link>
      </div>
    </article>
  );
}
