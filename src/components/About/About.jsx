import React from "react";
import { Link } from "react-router-dom";
import AboutData from "../Data/AboutData.json"
import HomeSection from "../Data/HomeData.json"
const About = () => {
  // Calling JSON File
  const aboutHeading=AboutData.aboutHeading;
  const AboutProductData=AboutData.productData;
  const AboutUsContent=AboutData.aboutUsContent;
  const contentData = HomeSection.contentData;


  return (
    <div>
      {/* Breadcrumb Area */}
      <div className="breadcrumb-area">
        <div
          className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center"
          style={{ backgroundImage: "url(img/bg-img/about.jpg)" }}
        >
          <h2>ABOUT US</h2>
        </div>
      </div>

      {/* About Us Area */}
      <section
        className="about-us-area section-padding-100-0"
        style={{ backgroundColor: "#fdffe8" }}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-5">
              {/* Section Heading */}
              {aboutHeading.map((section, index) => (
                <div key={index} className="section-heading">
                  <h2>{section.heading}</h2>
                  <p>{section.description}</p>
                </div>
              ))}
              {/* <div className="section-heading">
               <h2>ABOUT US</h2>
                <p>We are leading in the rice export field.</p>
              </div>  */}

              {/* Render paragraphs dynamically */}
              {AboutUsContent.map((aboutUsContent, index) => (
                <p key={index}>{aboutUsContent}</p>
              ))}
            </div>

            <div className="col-12 col-lg-6">
              {/* Benefits Area */}
              <div className="alazea-benefits-area">
                <div className="row">
                  {/* Individual productData go here */}
                  {AboutProductData.map((productData, index) => (
                    <div key={index} className="col-12 col-sm-6">
                      <div className="single-benefits-area">
                        <img src={productData.imageSrc} alt="" />
                        <h5>{productData.title}</h5>
                        <p>{productData.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="border-line"></div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="border-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Newsletter Area */}
      <section
        className="subscribe-newsletter-area"
        style={{ backgroundImage: "url(img/bg-img/subscribe.jpg)" }}
      >
        <div className="container">
          {contentData.map((content, index) => (
            <div
              key={index}
              className="row align-items-center justify-content-between"
            >
              <div className="col-12 col-lg-9">
                {/* Section Heading */}
                <div className="section-heading mb-0">
                  <h2 className="text-white">{content.heading}</h2>
                  <p className="text-white">{content.description}</p>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                {/* Subscribe Form */}
                <div className="subscribe-form pull-right">
                  <Link to="/contact">
                    <button type="submit" className="btn alazea-btn">
                      CONTACT NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Side Thumbnail */}
        <div
          className="subscribe-side-thumb wow fadeInUp"
          data-wow-delay="500ms"
        >
          <img className="first-img" src="img/core-img/leaf.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default About;
