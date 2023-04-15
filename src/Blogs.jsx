import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { useGetBlogsQuery } from "./services/blogApi";

const Blogs = () => {
  const { data: blogs } = useGetBlogsQuery();
  console.log(blogs);
  return (
    <>
      <div className="my-5">
        <h2 className="my-5 text-blue-700 font-bold text-3xl">Blog</h2>
        <Link to="/create">
          <button
            className="px-3 bg-blue-700 text-white rounded
        "
          >
            Create New Blog
          </button>
        </Link>
      </div>
      <div className="flex gap-3">
        {blogs?.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default Blogs;
