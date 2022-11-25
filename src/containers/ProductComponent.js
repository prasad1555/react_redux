import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderProduct = products.map((product) => {
    const { id, title, price, image, category } = product;
    return (
      <div className="four wide column" key={id} style={{ padding: "10px" }}>
        <Link to={`prodcut/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img
                  src={image}
                  alt={image}
                  style={{ width: 250, height: 250 }}
                />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta"> {category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderProduct}</>;
};
