import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// import CreatorProgressLabel from "./CreatorProgressLabel";
import TeamDisplay from "./TeamDisplay";

const ProjectCard = ({ project }) => {
  const {
    id,
    title,
    description,
    duration,
    progress,
    cost,
    buildToken,
    team,
    status,
  } = project;
  const isDraft = status === "draft";
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate(`/creator/create-project?id=${id}`);
  };

  const cardStyle = {
    width: "100%",
    height: "100%",
    background: "#222532",
    border: "1px solid #565F87",
    borderRadius: "17px",
  };

  const continueStyles = {
    textDecoration: "underline",
    cursor: "pointer",
  };

  const descriptionStyles = {
    color: "#D1D1D1",
  };

  const smallStyles = {
    color: "#999999",
  };

  const marginStyles = {
    marginTop: "-10px",
  };

  const cardFooterStyles = {
    borderTop: "1px solid #565F87",
    paddingTop: "1rem",
  };

  return isDraft ? (
    <div style={cardStyle} className="px-3 py-3">
      <div className="w-100 h-100 d-flex flex-column gap-3">
        {title && <h4 className="useAppWhite fs-5 fw-bold mb-0">{title}</h4>}
        {description && (
          <p
            className="useAppWhite fs-5 fw-medium mb-0"
            style={descriptionStyles}
          >
            {description}
          </p>
        )}
        {duration && (
          <div className="d-flex flex-column">
            <small style={smallStyles} className="fs-5 fw-semibold">
              Duration
            </small>
            <span className="useAppWhite fs-4 fw-bold">{duration}</span>
          </div>
        )}
        <span
          style={continueStyles}
          className="useAppYellow fs-5"
          onClick={handleContinue}
        >
          Continue Project Creation
        </span>

        <div
          style={cardFooterStyles}
          className="d-flex align-items-center justify-content-between"
        >
          {/* <CreatorProgressLabel progress={progress} /> */}
          <span>Hello</span>
          <TeamDisplay team={team} />
        </div>
      </div>
    </div>
  ) : (
    <div style={cardStyle} className="px-3 py-3">
      <div className="d-flex flex-column gap-3">
        {title && (
          <div className="d-flex align-items-lg-start justify-content-between">
            <Link
              to={`/creator/project/details/${id}`}
              style={{ textDecoration: "none" }}
            >
              <h4 className="useAppWhite fs-5 fw-bold mb-0">{title}</h4>
            </Link>
            <Form>
              <Form.Check
                id={`custom-switch-${id}`}
                type="switch"
                // onChange={onChange}
                // checked={checked}
              />
            </Form>
          </div>
        )}
        <Link
          to={`/creator/project/details/${id}`}
          style={{ textDecoration: "none" }}
        >
          <div className="d-flex flex-column gap-3">
            {description && (
              <p
                className="useAppWhite fs-5 fw-medium mb-0"
                style={descriptionStyles}
              >
                {description}
              </p>
            )}
            {cost && (
              <div className="d-flex flex-column">
                <small style={smallStyles} className="fs-5 fw-semibold">
                  Costing
                </small>
                <div
                  className="d-flex gap-2 align-items-baseline"
                  style={marginStyles}
                >
                  <span className="useAppWhite fs-4 fw-bold">{`$${cost}`}</span>
                  {buildToken && (
                    <span
                      style={smallStyles}
                      className="fs-5 fw-semibold"
                    >{`~ ${buildToken} Build Token`}</span>
                  )}
                </div>
              </div>
            )}
            {duration && (
              <div className="d-flex flex-column">
                <small style={smallStyles} className="fs-5 fw-semibold">
                  Duration
                </small>
                <span style={marginStyles} className="useAppWhite fs-4 fw-bold">
                  {duration}
                </span>
              </div>
            )}

            <div
              style={cardFooterStyles}
              className="d-flex align-items-center justify-content-between"
            >
              {/* <CreatorProgressLabel progress={progress} /> */}
              <span>Hello</span>
              <TeamDisplay team={team} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
