import React, { useState } from "react";

const CareerForm = () => {
  const skillsOptions = [
    "Accounting",
    "Marketing",
    "IT",
    "Client Handeling",
    "Management",
    "Productions",
    "Resource Handeling",
  ];

  const experienceOptions = [
    "Select Experience",
    "0-1 years",
    "2-3 years",
    "4-5 years",
    "6-7 years",
    "8-9 years",
    "10 or more years",
  ];

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    programmingLanguages: [],
    experience: "",
    mobile: "",
    resume: null,
    additionalInformation: "",
  });

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      console.log("Form data submitted:", formDataToSend);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const careerStyle = {
    backgroundImage: "url(/img/bg-img/career.jpg)",
  };
  return (
    <div class="breadcrumb-area">
      <div
        class="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center"
        style={careerStyle}
      >
        <h2>CAREERS</h2>
      </div>
      <div className="container mt-5 mycareer">
        <div className="row">
          <div className="col-md-8" style={{ margin: "0 auto", float: "none" }}>
            <h3 align="center">Build Your Career With Rice </h3>
            <br />
            <h4 align="center">Please fill this form</h4>
            <br />
            <form
              action=""
              method="post"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Enter Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Enter Address</label>
                    <textarea
                      name="address"
                      placeholder="Enter Address"
                      className="form-control"
                      required
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label>Enter Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Email Address"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Select Your Skills</label>
                    <select
                      name="programming_languages[]"
                      className="form-control"
                      multiple
                      required
                      style={{ height: "150px" }}
                    >
                      {skillsOptions.map((skill, index) => (
                        <option key={index} value={skill}>
                          {skill}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Select Year of Experience</label>
                    <select name="experience" className="form-control" required>
                      {experienceOptions.map((experience, index) => (
                        <option key={index} value={experience}>
                          {experience}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Enter Mobile Number</label>
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Enter Mobile Number"
                      className="form-control"
                      pattern="\d*"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Select Your Resume</label>
                    <input
                      type="file"
                      name="resume"
                      accept=".doc,.docx, .pdf"
                      onChange={handleFileChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Enter Additional Information</label>
                    <textarea
                      name="additional_information"
                      placeholder="Enter Additional Information"
                      className="form-control"
                      required
                      rows="8"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="form-group" align="center">
                <input
                  type="submit"
                  name="btnSubmit"
                  value="Submit"
                  className="btn btn-lg btn-success"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
