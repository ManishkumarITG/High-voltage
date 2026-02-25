import React, { useEffect, useState } from "react";

const Collection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <section className="products-section">
      <div className="products-container">
        <h2 className="products-heading">HOODIES COLLECTION</h2>
        <span className="shop-link">SHOP NOW</span>

        <div className="cards-wrapper">
          {products.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />

              <div className="card-content">
                <div className="stars">★★★★★</div>
                <h4>{item.title}</h4>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;