import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
} from "./services/blogApi";

const Edit = () => {
  const { id } = useParams();
  const { data: blog } = useGetSingleBlogQuery(id);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const [useUpdateBlog] = useUpdateBlogMutation(id);
  useEffect(() => {
    setTitle(blog?.title);
    setDes(blog?.des);
    setImage(blog?.image);
  }, [blog]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newData = { id, title, des, image };
    useUpdateBlog(newData);
    navigate("/");
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Title
        </label>
        <input
          type="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Description
        </label>
        <input
          type="description"
          value={des}
          onChange={(e) => setDes(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Image
        </label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2">
        Update
      </button>
      <Link to="/">
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Back
        </button>
      </Link>
    </form>
  );
};

export default Edit;
