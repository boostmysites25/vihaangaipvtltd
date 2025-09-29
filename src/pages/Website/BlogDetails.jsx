import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import Header from "../../components/Website/Header";
import Footer from "../../components/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import line from "../../assets/images/line.png";
import bannerImg from "../../assets/images/blogs-banner.webp";
import { fetchBlogBySlug, fetchPublishedBlogs } from "../../services/blogApi";
import { BlogItem } from "./Blogs";
import { ImSpinner2 } from "react-icons/im";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogData = async () => {
      try {
        setLoading(true);

        // Fetch the specific blog
        const blogResponse = await fetchBlogBySlug(slug);
        if (blogResponse.success) {
          setBlog(blogResponse.blog);
        } else {
          setError("Blog not found");
          return;
        }

        // Fetch latest blogs for the sidebar
        const blogsResponse = await fetchPublishedBlogs();
        if (blogsResponse.success) {
          const otherBlogs = blogsResponse.blogs.filter(
            (item) => item.slug !== slug
          );
          setLatestBlogs(otherBlogs.slice(0, 3));
        }
      } catch (err) {
        console.error("Error loading blog:", err);
        setError("Failed to load blog. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadBlogData();
    }
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />
        <div data-aos="fade-down" className="h-[50vh] md:h-[60vh]">
          <img
            loading="lazy"
            src={bannerImg}
            width="800"
            height="600"
            className="h-full object-cover w-full object-left md:object-top"
            alt="banner"
          />
        </div>
        <div className="bg-tertiary/5 relative text-primary_text">
          <div className="flex flex-col items-center justify-center min-h-[50vh] py-16 space-y-3">
            <ImSpinner2 className="spin text-primary text-4xl" />
            <p className="text-gray-600 font-medium">Loading blog...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !blog) {
    return <Navigate to="/blogs" />;
  }

  return (
    <>
      <Header />
      <div data-aos="fade-down" className="h-[50vh] md:h-[60vh]">
        <img
          loading="lazy"
          src={bannerImg}
          width="800"
          height="600"
          className="h-full object-cover w-full object-left md:object-top"
          alt="banner"
        />
      </div>
      <div className="bg-tertiary/5 relative text-primary_text">
        <div className="wrapper py-[5rem] relative z-10">
          <div className="flex flex-col gap-2 pb-[3rem] p-3 sm:p-5 bg-secondary/10 rounded-xl mb-[3rem]">
            <img
              data-aos="fade-up"
              src={blog.imageUrl}
              alt={blog.imageAlt || blog.title}
              className="w-full rounded-xl object-cover aspect-[4/3] max-h-[70vh]"
            />
            <div className="flex flex-col gap-2">
              <div
                data-aos="fade-up"
                className="flex justify-between items-center font-light mt-[0.8rem]"
              >
                <div className="rounded-2xl bg-primary text-white font-medium px-3 py-1 text-sm w-fit">
                  By {blog.author?.name || "Admin"}
                </div>
              </div>
              <h4 data-aos="fade-up" className="heading mt-[1rem] pb-[1.5rem]">
                {blog.title}
              </h4>
              <div
                data-aos="fade-up"
                className="hyphen-auto leading-relaxed text-gray-800 border-t border-primary/30 pt-[2rem]"
              >
                <div
                  className="reset-html"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>
            </div>
          </div>
          {latestBlogs.length > 0 && (
            <div className="pt-[3rem]">
              <div data-aos="fade-up" className="flex items-center gap-3">
                <LazyLoadImage
                  src={line}
                  alt="Decorative line"
                  className="w-[3rem]"
                />
                <h2 className="font-medium text-secondary">Latest Blogs</h2>
              </div>
              <div className="mt-[1.5rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
                {latestBlogs.map((item) => (
                  <BlogItem key={item._id} blog={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
