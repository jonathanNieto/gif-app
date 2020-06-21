import React, { useState } from "react";
// import PropTypes from "prop-types";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifApp = (props) => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  return (
    <>
      <h2>Gif App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((cat) => (
          <GifGrid key={cat} category={cat} />
        ))}
      </ol>
    </>
  );
};

GifApp.propTypes = {};

export default GifApp;
