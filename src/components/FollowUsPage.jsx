import React, { useEffect, useState } from "react";

const FollowUs = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <section className="follow-section">
      <div className="follow-container">
        <h2 className="follow-heading">
          FOLLOW US @HIGH VOLTAGE INDUSTRIES
        </h2>

        <div className="follow-grid">
          {products.map((item) => (
            <div className="follow-item" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowUs;