import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import HeaderData from "../Data/HeaderData.json";
const Header = () => {
  const headerContent = HeaderData.headerContent;
  const certificates = HeaderData.certificates;
  const navLinks = HeaderData.navLinks;

  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    // <!-- ##### Header Area Start ##### -->
    <>
      <header class="header-area">
        {/* <!-- ***** Top Header Area ***** --> */}
        <div class="top-header-area">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="top-header-content d-flex align-items-center justify-content-between">
                  {/* <!-- Top Header Content --> */}
                  <div className="top-header-meta">
                    {headerContent.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title={item.tooltip}
                      >
                        <i className={item.icon} aria-hidden="true"></i>{" "}
                        <span>
                          {item.title}: {item.text}
                        </span>
                      </a>
                    ))}
                  </div>

                  {/* <!-- Top Header Content --> */}
                  <div class="top-header-meta d-flex">
                    {/* <!-- Language Dropdown --> */}
                    <div className="language-dropdown">
                      <div className="dropdown">
                        <ButtonGroup>
                          <Dropdown as={ButtonGroup}>
                            <Button
                              variant="secondary"
                              className="btn btn-secondary  mr-30"
                            >
                              CERTIFICATES &nbsp;&nbsp;
                              <Dropdown.Toggle
                                split
                                variant="secondary"
                                id="dropdown-split-basic"
                              />
                            </Button>
                            <Dropdown.Menu>
                              {certificates.map((certificate) => (
                                <Dropdown.Item
                                  key={certificate.id}
                                  href={`#${certificate.id}`}
                                >
                                  {certificate.label}
                                </Dropdown.Item>
                              ))}
                            </Dropdown.Menu>
                          </Dropdown>
                        </ButtonGroup>
                      </div>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/pg/Maa-Durga-Industries-494943811033094/about/?ref=page_internal"
                      >
                        <i
                          class="fa fa-facebook"
                          target="_blank"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://twitter.com/maadurgaindus"
                      >
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://plus.google.com/111444152594664066019"
                      >
                        <i class="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ***** Navbar Area ***** --> */}
        <div class="alazea-main-menu">
          <div class="classy-nav-container breakpoint-off">
            <div class="container">
              {/* <!-- Menu --> */}
              <nav class="classy-navbar justify-content-between" id="alazeaNav">
                {/* <!-- Nav Brand --> */}
                <a href="/" class="nav-brand">
                  <img src="img/core-img/logo.png" alt="" />
                </a>

                {/* <!-- Navbar Toggler --> */}
                <div class="classy-navbar-toggler">
                  <span class="navbarToggler">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>

                {/* <!-- Menu --> */}
                <div class="classy-menu">
                  {/* <!-- Close Button --> */}
                  <div class="classycloseIcon">
                    <div class="cross-wrap">
                      <span class="top"></span>
                      <span class="bottom"></span>
                    </div>
                  </div>

                  {/* <!-- Navbar Start --> */}
                  <div className="classynav">
                    <ul>
                      {navLinks.map((link, index) => (
                        <li key={index}>
                          <Link to={link.to}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* <!-- Navbar End --> */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
