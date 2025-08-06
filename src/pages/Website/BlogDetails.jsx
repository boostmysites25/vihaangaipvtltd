import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Header from "../../components/Website/Header";
import Footer from "../../components/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import line from "../../assets/images/line.png";
import bannerImg from "../../assets/images/blogs-banner.webp";
import { blogs } from "../../data/blogs";
import { BlogItem } from "./Blogs";

const BlogDetails = () => {
  const { title } = useParams();
  const blog = blogs.find((item) => item.title === title);
  if (!blog) {
    return <Navigate to="/blogs" />;
  }
  const latestBlogs = blogs.filter((item) => item.id !== blog.id) || [];
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
              src={blog.image}
              alt=""
              className="w-full rounded-xl object-cover aspect-[4/3] max-h-[70vh]"
            />
            <div className="flex flex-col gap-2">
              <div
                data-aos="fade-up"
                className="flex justify-between items-center font-light mt-[0.8rem]"
              >
                <div className="rounded-2xl bg-primary text-white font-medium px-3 py-1 text-sm w-fit">
                  By Admin
                </div>
              </div>
              <h4 data-aos="fade-up" className="heading mt-[1rem] pb-[1.5rem]">
                {blog.title}
              </h4>
              <div
                dangerouslySetInnerHTML={{ __html: blog.html }}
                data-aos="fade-up"
                className="hyphen-auto leading-relaxed text-gray-800 border-t border-primary/30 pt-[2rem]"
              ></div>
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
                {blogs
                  .filter((item) => item.id !== blog.id)
                  .slice(0, 3)
                  .map((item) => (
                    <BlogItem key={item.id} blog={item} />
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
