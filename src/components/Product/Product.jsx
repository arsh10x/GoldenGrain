import React, { useState } from "react";
// import productItems from "../Data/Product_Items";
import ProductData from "../Data/ProductData.json"
const Product = () => {
  const productItems=ProductData.productItems;
  const [filter, setFilter] = useState("All"); // Initial filter state

  const handleFilterClick = (filterType) => {
    setFilter(filterType);
  };

  // Filter products based on the selected category
  const filteredItems =
    filter === "All"
      ? productItems
      : productItems.filter((item) => item.category === filter);

  return (
    <>
      {/* Breadcrumb Area */}
      <div className="breadcrumb-area">
        {/* Top Breadcrumb Area */}
        <div
          className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center"
          style={{ backgroundImage: "url(img/bg-img/products.jpg)" }}
        >
          <h2>OUR PRODUCTS</h2>
        </div>
      </div>

      {/* Portfolio Area */}
      <section className="alazea-portfolio-area section-padding-100-0">
        <div className="container">
          {/* Section Heading */}
          <div className="section-heading text-center">
            <h2>WE OFFER ONLY BEST PRODUCTS</h2>
            <p>
              Our products are best, and hard-earned experience and reliability
              on high-quality standards from farm to the final destination
              enable us to guarantee quality rice and consistent supply. Contact
              now to order the best quality rice from Sasaram.
            </p>
          </div>

          {/* Portfolio Filter Buttons */}
          <div className="row">
            <div className="col-12">
              <div className="alazea-portfolio-filter">
                <div className="portfolio-filter">
                  {/* Map over categories and create filter buttons */}
                  {[
                    "All",
                    "Raw",
                    "Steam [20kg]",
                    "Steam [25kg]",
                    "Sella/Boiled [20kg]",
                    "Sella/Boiled [25kg]",
                  ].map((category) => (
                    <button
                      key={category}
                      className={filter === category ? "btn active" : "btn"}
                      onClick={() => handleFilterClick(category)}
                    >
                      {category.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Items */}
          <div className="row alazea-portfolio">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="col-12 col-sm-6 col-lg-3 single_portfolio_item wow fadeInUp"
                data-wow-delay={`${100 * item.id}ms`}
              >
                {/* Portfolio Thumbnail */}
                <div
                  className="portfolio-thumbnail bg-img"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                {/* Portfolio Hover Text */}
                <div className="portfolio-hover-overlay">
                  <a
                    href={item.image}
                    className="portfolio-img d-flex align-items-center justify-content-center"
                    title={item.title}
                  >
                    <div className="port-hover-text">
                      <h3>{item.title}</h3>
                      <p style={{color:"white"}}>{item.description}</p>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Area */}
      <section
        className="subscribe-newsletter-area mt-5"
        style={{ backgroundImage: "url(img/bg-img/subscribe.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-lg-9">
              <div className="section-heading mb-0">
                <h2 className="text-white">
                  TASTE THE BEST WITH Rice INDUSTRIES
                </h2>
                <p className="text-white">
                  Our products are being exported to many places in Bihar either
                  directly or through associates. The result is guaranteed
                  consistency at the consumer table every time. Our mission is
                  to ensure consistently longer-aged rice to deliver better
                  value to the customers.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="subscribe-form pull-right">
                <a href="contact.php">
                  <button type="submit" className="btn alazea-btn">
                    CONTACT NOW
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Subscribe Side Thumbnail */}
        <div
          className="subscribe-side-thumb wow fadeInUp"
          data-wow-delay="500ms"
        >
          <img className="first-img" src="img/core-img/leaf.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Product;
