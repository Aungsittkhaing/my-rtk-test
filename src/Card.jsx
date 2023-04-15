import React from "react";
import { Link } from "react-router-dom";
import { useDeleteBlogMutation } from "./services/blogApi";

const Card = ({ blog: { title, image, desc, id } }) => {
  const [deleteBlog] = useDeleteBlogMutation();
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <a href="#">
        <img className="rounded-t-lg" src={image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
        <Link to={`/blogs/${id}`}>
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Detail
          </button>
        </Link>
        <button
          onClick={() => deleteBlog(id)}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none ml-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
