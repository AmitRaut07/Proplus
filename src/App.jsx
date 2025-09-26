import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import BlogList from "./components/Blogs/BlogList.jsx";
import BlogPost from "./components/Blogs/BlogPost.jsx";
import PricingAndFaqs from "./pages/PricingAndFaqs.jsx";
import ScrollToTop from "./pages/ScrollToTop.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/PricingFAQs" element={<PricingAndFaqs />} />
          <Route path="/blogs" element={<Blogs />}>
            <Route index element={<BlogList />} />
            <Route path=":slug" element={<BlogPost />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
