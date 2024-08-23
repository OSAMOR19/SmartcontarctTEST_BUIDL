import React from "react";
import { Image } from "react-bootstrap";
import images from "../../../../constants/images";
import Rating from "../../../../assets/icons/rating.svg";

const ProjectDetails = ({ project }) => {
  const smallStyles = {
    color: "#999999",
  };

  const documentStyles = {
    color: "#889CFF",
  };

  return (
    <div className="d-flex flex-column gap-5 p-4 px-md-5">
      <div>
        <small style={smallStyles} className="fs-5 fw-bold">
          Project Title
        </small>
        <h4 className="useAppWhite mb-0 fs-2 fw-bolder">{project.title}</h4>
      </div>
      <div>
        <small style={smallStyles} className="fs-5 fw-bold">
          Project Description
        </small>
        <p className="normalPTag fw-medium mb-0">
          {project.description}{" "}
          {/* {
            "At [Company Name], we're passionate about delivering exceptional products and experiences that enrich our customers' lives. With a commitment to quality, innovation, and customer satisfaction, we strive to be the leader in our industry and make a positive impact on the world around us."
          } */}
        </p>
      </div>
      <div>
        <small style={smallStyles} className="fs-5 fw-bold">
          Project Documents
        </small>
        <div className="d-flex flex-column">
          {projectDocuments.map(({ document }, index) => {
            return (
              <span
                key={index}
                style={documentStyles}
                className="normalPTag fw-medium"
              >
                {document}
              </span>
            );
          })}
        </div>
      </div>
      <div>
        <small style={smallStyles} className="fs-5 fw-bold">
          Project Manger
        </small>
        <div className="d-flex gap-2 align-items-center pt-2">
          <Image
            src={images.charlesImage.src}
            alt={images.charlesImage.alt}
            width={70}
          />
          <div className="d-flex flex-column align-align-items-start">
            <h6 className="useAppWhite fw-bold m-0">Charles Victor</h6>
            <span className="useAppWhite fw-semibold">
              <Rating /> <small>5.0 Rating - 2 Jobs</small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

const projectDocuments = [
  { document: "Document_Case_Study.pdf" },
  { document: "Userstory.pdf" },
  { document: "ProductConcept.pdf" },
];
