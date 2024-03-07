import React from "react";
import ContactData from '../Data/ContactData.json'
const Contact = () => {
  // Calling Json Data
  const formContact = ContactData.formContact;
  const contactInfo= ContactData.contactInfo
  const we1 = () => {
    console.log("we1 function called");
  };
  return (
    <>
      {/* Breadcrumb Area */}
      <div className="breadcrumb-area">
        {/* Top Breadcrumb Area */}
        <div
          className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center"
          style={{ backgroundImage: "url(img/bg-img/contact.jpg)" }}
        >
          <h2>CONTACT US</h2>
        </div>
      </div>

      {/* Contact Area */}
      <section className="contact-area section-padding-100-0">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-lg-7 col-md-8">
              {/* Section Heading */}
              {formContact.map((title, index) => (
                <div key={index} className="section-heading">
                  <h2>{title.heading}</h2>
                  <p>{title.description}</p>
                </div>
              ))}

              {/* Contact Form Area */}
              <div className="contact-form-area mb-100">
                <form action="contact.php" method="post">
                  <div className="row">
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                        />
                        <input
                          type="hidden"
                          name="mail_to"
                          value="riceexport@trickuweb.com"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="phone"
                          name="phone"
                          className="form-control"
                          id="phone"
                          placeholder="Contact Number"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="mail_msg"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Message"
                          onKeyUp={() => we1()}
                        ></textarea>
                        <input type="hidden" name="mail_sub" id="4" />
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn alazea-btn mt-15"
                        onClick={() => we1()}
                        name="btnSubmit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 col-md-4">
              {/* Section Heading */}
              <div className="section-heading">
                <h2>CONTACT US</h2>
                <p>
                  You can send mail or contact the below number, we will respond
                  as soon as possible.
                </p>
              </div>
              {/* Contact Information */}
              <div className="contact-information">
                {contactInfo.map((info, index) => (
                  <div key={index}>
                    <p>
                      <span>{info.title}: </span>
                      {info.details.map((detail, idx) => (
                        <div key={idx}>
                          {detail}
                          <br />
                        </div>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            ;
          </div>
        </div>
      </section>

      {/* Google Maps */}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.812171988074!2d78.59112837459635!3d15.878532344515829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb59feb63918055%3A0xea73c9f0933f5dde!2sKGN%20Agro%20Enterprises!5e1!3m2!1sen!2sin!4v1706957275483!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
