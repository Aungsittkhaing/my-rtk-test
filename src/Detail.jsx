import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleBlogQuery } from "./services/blogApi";

const Detail = () => {
  const { id } = useParams();
  const { data: blog } = useGetSingleBlogQuery(id);
  console.log(blog);
  return (
    <div>
      <img src={blog?.image} className="w-60 my-3" alt="" />
      <h4 className="font-semibold text-2xl">Title</h4>
      <p>{blog?.title}</p>
      <p>{blog?.des}</p>
      <Link to="/">
        <button
          type="button"
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
        >
          Back
        </button>
      </Link>
      <Link to={`/edit/${blog?.id}`}>
        <button
          type="button"
          className="text-white bg-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-600"
        >
          Edit
        </button>
      </Link>
    </div>
  );
};

export default Detail;
