import React from "react";
import PropTypes from "prop-types";
import GifCard from "./GifCard";
import { useFetchGifs } from "../hooks/useFetchGifs";
import Spinner from "./Spinner";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeInLeft">{category}</h3>
      {loading && <Spinner />}
      <div className="card-grid">
        {images.map((img) => (
          <GifCard key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
