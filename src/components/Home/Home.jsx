import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { CarouselItem } from "react-bootstrap";
import HomeSection from "../Data/HomeData.json";
import AboutData from "../Data/AboutData.json";

import "./Home.css";
const Home = () => {
  // Calling JSON
  const homeSection = HomeSection.homeSection;
  const carouselItems = HomeSection.carouselItems;
  const serviceContent = HomeSection.serviceContent;
  const portfolioItems = HomeSection.portfolioItems;
  const productHover = HomeSection.productHover;
  const contentData = HomeSection.contentData;
  const productTitle = HomeSection.productTitle;
  const aboutUsContent = AboutData.aboutUsContent;
  const productData = AboutData.productData;
  const aboutHeading = AboutData.aboutHeading;

  return (
    <React.Fragment>
      {/* <!-- ##### Hero Area Start ##### --> */}
      <Carousel
        slide={false}
        nextIcon={false}
        prevIcon={false}
        indicators={false}
      >
        {carouselItems.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="single-hero-post bg-overlay">
              {/* <!-- Post Image --> */}
              <div
                className={`slide-img bg-img zoomIn
                }`}
                style={{ backgroundImage: slide.image }}
              ></div>
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-12">
                    {/* <!-- Post Content --> */}
                    <div className="hero-slides-content text-center">
                      <h2>{slide.title}</h2>
                      <p>{slide.description}</p>
                      <div className="welcome-btn-group">
                        <a href={slide.link1} className="btn alazea-btn mr-30">
                          VIEW PRODUCTS
                        </a>
                        <a href={slide.link2} className="btn alazea-btn active">
                          CONTACT US
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </Carousel>

      {/* <!-- ##### Hero Area End ##### --> */}

      {/* <!-- ##### Service Area Start ##### --> */}
      <section
        className="our-services-area bg-gray section-padding-100-0"
        id="about"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <!-- Section Heading --> */}
              {homeSection.map((section, index) => (
                <div key="index" className="section-heading text-center">
                  <h2>{section.title}</h2>
                  <p>{section.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="row justify-content-between">
            <div className="col-12 col-lg-5">
              {serviceContent.map((content, index) => (
                <div key={index} className="alazea-service-area mb-100">
                  {/* <!-- Single Service Area --> */}
                  <div
                    className="single-service-area d-flex align-items-center wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    {/* <!-- Icon --> */}
                    <div className="service-icon mr-30">
                      <img src={content.image} alt="" />
                    </div>
                    {/* <!-- Content --> */}
                    <div className="service-content">
                      <h5>{content.title}</h5>
                      <p>{content.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-12 col-lg-6">
              <div className="alazea-video-area bg-overlay mb-100">
                <img src={"img/bg-img/1.jpg"} alt="" />
                <a
                  href="https://www.youtube.com/watch?v=G33_pyAzZHU"
                  className="video-icon"
                >
                  <i className="fa fa-play" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ##### Service Area End ##### --> */}

      {/* <!-- ##### About Area Start ##### --> */}
      <section className="about-us-area section-padding-100-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-5">
              {/* Section Heading */}
              {aboutHeading.map((section,index)=>(
              <div key={index} className="section-heading">
                <h2>{section.heading}</h2>
                <p>{section.description}</p>
              </div>
              ))}

              {/* Render paragraphs dynamically */}
              {aboutUsContent.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="col-12 col-lg-6">
              {/* Benefits Area */}
              <div className="alazea-benefits-area">
                <div className="row">
                  {/* Individual benefits go here */}
                  {productData.map((benefit, index) => (
                    <div key={index} className="col-12 col-sm-6">
                      <div className="single-benefits-area">
                        <img src={benefit.imageSrc} alt="" />
                        <h5>{benefit.title}</h5>
                        <p>{benefit.description}</p>
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
      </section>
      {/* <!-- ##### About Area End ##### --> */}

      {/* <!-- ##### Portfolio Area Start ##### --> */}
      <section className="alazea-portfolio-area section-padding-100-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Section Heading */}
              {productTitle.map((section,index)=>(
                <div key={index} className="section-heading text-center">
                <h2>{section.heading}</h2>
                <p>{section.description}</p>
              </div>
              ))}
              
            </div>
          </div>
        </div>

        <div className="row alazea-portfolio">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="col-12 col-sm-6 col-lg-3 single_portfolio_item design home-design wow fadeInUp"
              data-wow-delay="100ms"
            >
              {/* Portfolio Thumbnail */}
              <div
                className="portfolio-thumbnail bg-img"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              ></div>
              {/* Portfolio Hover Text */}
              <div className="portfolio-hover-overlay">
                <a
                  href={item.imageUrl}
                  className="portfolio-img d-flex align-items-center justify-content-center"
                  title={`Portfolio ${item.id}`}
                >
                  {productHover.map((text, index) => (
                    <div key={index} className="port-hover-text">
                      <h3>{text.title1}</h3>
                      <h5>{text.title2t}</h5>
                    </div>
                  ))}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* // <!-- ##### Portfolio Area End ##### --> */}

      {/* // <!-- ##### Subscribe Area Start ##### --> */}
      <section
        className="subscribe-newsletter-area mt-5"
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
        {/* <!-- Subscribe Side Thumbnail --> */}
        <div
          className="subscribe-side-thumb wow fadeInUp"
          data-wow-delay="500ms"
        >
          <img className="first-img" src="img/core-img/leaf.png" alt="" />
        </div>
      </section>
      {/* <!-- ##### Subscribe Area End ##### --> */}
    </React.Fragment>
  );
};

export default Home;
