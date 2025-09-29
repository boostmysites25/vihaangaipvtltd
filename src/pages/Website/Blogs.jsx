import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Website/Header";
import Footer from "../../components/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import line from "../../assets/images/line.png";
import bannerImg from "../../assets/images/blogs-banner.webp";
import { fetchPublishedBlogs } from "../../services/blogApi";
import { ImSpinner2 } from "react-icons/im";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetchPublishedBlogs();
        if (response.success) {
          setBlogs(response.blogs || []);
        } else {
          setError("Failed to load blogs");
        }
      } catch (err) {
        console.error("Error loading blogs:", err);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

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
      <div className="bg-secondary/5 relative text-primary_text">
        <div className="py-[5rem] flex flex-col gap-5 items-center wrapper">
          <div data-aos="fade-up" className="flex items-center gap-3">
            <LazyLoadImage
              src={line}
              alt="Decorative line"
              className="w-[3rem]"
            />
            <h2 className="font-medium text-secondary">Blogs</h2>
          </div>
          <h4
            data-aos="fade-up"
            className="heading-2 mx-auto font-semibold leading-tight text-primary text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Insights and Innovations: Your Gateway to IT Excellence
          </h4>

          {loading && (
            <div className="flex flex-col items-center justify-center py-16 space-y-3">
              <div className="spin">
                <ImSpinner2 className="text-primary text-4xl" />
              </div>
              <p className="text-gray-600 font-medium">Loading blogs...</p>
            </div>
          )}

          {error && (
            <div className="text-red-500 text-center py-8">{error}</div>
          )}

          {!loading && !error && (
            <div className="mt-[2rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
              {blogs.length > 0 ? (
                blogs.map((blog) => <BlogItem key={blog._id} blog={blog} />)
              ) : (
                <div className="col-span-full text-center py-8 text-gray-500">
                  No blogs available at the moment.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;

// blog item
export const BlogItem = ({ blog }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-secondary/10 rounded-xl p-5 text-primary_text relative z-10 group"
    >
      <Link to={`/blogs/${blog.slug}`}>
        <img
          src={blog.imageUrl}
          alt={blog.imageAlt || blog.title}
          width="600"
          height="400"
          className="bg-cover aspect-video w-full rounded-xl group-hover:opacity-85 transition-all duration-200"
        />
      </Link>
      <div className="flex justify-start font-light mt-[0.8rem]">
        <div className="rounded-2xl bg-primary text-white font-medium px-3 py-1 text-sm w-fit">
          {blog.author?.name || "Admin"}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-[1rem]">
        <Link
          to={`/blogs/${blog.slug}`}
          className="text-xl hyphen-auto font-medium leading-tight line-clamp-2 text-ellipsis hover:text-tertiary transition-all duration-200"
        >
          {blog.title}
        </Link>
        <div className="text-[.9rem] leading-tight text-gray-700 line-clamp-4 text-ellipsis hyphen-auto">
          {blog.excerpt}
        </div>
      </div>
      <div className="mt-6 w-full flex justify-center">
        <Link to={`/blogs/${blog.slug}`} className="primary-btn w-full">
          Read More
        </Link>
      </div>
    </div>
  );
};
