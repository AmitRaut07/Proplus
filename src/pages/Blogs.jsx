import { Outlet } from 'react-router-dom';
import '../components/Blogs/blog.css';

export default function Blogs() {
  return (
    <div className="blogs-page">
      <header className="blog-header">
        <h1>Pro Plus Pest Control Blog</h1>
        <p>Expert advice on pest prevention and treatment</p>
      </header>
      <Outlet /> {/* This will render either BlogList or BlogPost */}
    </div>
  );
}