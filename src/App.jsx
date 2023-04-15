import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./Blogs";
import Create from "./Create";
import Detail from "./Detail";
import Edit from "./Edit";
// import "./index.css";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Blogs />}></Route>
        <Route path="/blogs/:id" element={<Detail />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
      </Routes>
    </div>
  );
};
export default App;
