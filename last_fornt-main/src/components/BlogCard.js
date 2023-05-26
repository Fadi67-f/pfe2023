import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({item}) => {
  return (
    <div className="blog-card" style={{marginBottom:"20px"}}>
      <div className="card-image">
        <img src={item.imageCover} className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        
        <h5 className="title">{item.title}</h5>
        <p className="desc">
        description ...
        </p>
        <Link to={`/product/${item._id}`} className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
