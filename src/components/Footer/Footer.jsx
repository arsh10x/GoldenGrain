import React from "react";
import FooterData from "../Data/FooterData.json";
const Footer = () => {
  const footerStyle = {
    backgroundImage: "url(/img/bg-img/3.jpg)",
  };
  const socialLinks = FooterData.socialLinks;
  const footerContent = FooterData.footerContent;
  const navLinks = FooterData.navLinks;
  const contactInfo = FooterData.contactInfo;
  const bestSellerProducts = FooterData.bestSellerProducts;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {/* <!-- ##### Footer Area Start ##### --> */}
      <footer class="footer-area bg-img" style={footerStyle}>
        {/* <!-- Main Footer Area --> */}
        <div class="main-footer-area">
          <div class="container">
            <div class="row">
              {/* <!-- Single Footer Widget --> */}
              <div class="col-12 col-sm-6 col-lg-3">
                <div class="single-footer-widget">
                  {footerContent.map((footerWidget, index) => (
                    <div key={index}>
                      <div class="footer-logo mb-30">
                        <a href="#">
                          <img src={footerWidget.image} alt="Logo" />
                        </a>
                      </div>
                      <p>{footerWidget.description}</p>
                    </div>
                  ))}
                  <div class="social-info">
                    {socialLinks.map((link, index) => (
                      <a key={index} target="_blank" href={link.url}>
                        <i
                          class={`fa fa-${link.platform.toLowerCase()}`}
                          aria-hidden="true"
                        ></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* <!-- Single Footer Widget --> */}
              <div className="col-12 col-sm-6 col-lg-6">
                <div className="single-footer-widget">
                  <div className="widget-title">
                    <h5>BEST SELLER</h5>
                  </div>
                  {bestSellerProducts.map((product, index) => (
                    <div
                      key={index}
                      className="single-best-seller-product d-flex align-items-center"
                    >
                      <div className="product-thumbnail">
                        <a href="/product">
                          <img src={product.imageUrl} alt="" />
                        </a>
                      </div>
                      <div className="product-info">
                        <a href="/product">{product.productName}</a>
                        <p>{product.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* <!-- Single Footer Widget --> */}
              <div class="col-12 col-sm-6 col-lg-3">
                <div class="single-footer-widget">
                  <div class="widget-title">
                    <h5>CONTACT</h5>
                  </div>

                  <div class="contact-information">
                    {contactInfo.map((info, index) => (
                      <p key={index}>
                        <span>{info.label}:</span> {info.details}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Footer Bottom Area --> */}
        <div class="footer-bottom-area">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="border-line"></div>
              </div>
              {/* <!-- Copywrite Text --> */}
              <div class="col-12 col-md-6">
                <div class="copywrite-text">
                  <p>
                    <script>document.write(new Date().getFullYear());</script> ©
                    Copyright ©2024 All rights reserved
                  </p>
                </div>
              </div>
              {/* <!-- Footer Nav --> */}
              <div class="col-12 col-md-6">
                <div className="footer-nav">
                  <nav>
                    <ul>
                      {navLinks.map((link, index) => (
                        <li key={index}>
                          <a href={link.href}>{link.label}</a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={scrollToTop}>
          <span id="scrollUp" className="fa fa-angle-up"></span>
        </button>
      </footer>
      {/* <!-- ##### Footer Area End ##### --> */}
    </>
  );
};

export default Footer;
