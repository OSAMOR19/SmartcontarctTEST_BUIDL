import { Link, useNavigate } from "react-router-dom";
import CreatorProgressLabel from "./CreatorProgressLabel";
import TeamDisplay from "./TeamDisplay";

const ProjectCard = ({ project }) => {
  const { id, title, description, duration, progress, team, status } = project;
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
      <div className="w-100 h-100 d-flex flex-column gap-4">
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
            <span style={marginStyles} className="useAppWhite fs-4 fw-bold">
              {duration}
            </span>
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
          <CreatorProgressLabel progress={progress} />
          <TeamDisplay team={team} />
        </div>
      </div>
    </div>
  ) : (
    <Link
      to={`/creator/project/details/${id}`}
      style={{ textDecoration: "none" }}
    >
      <div style={cardStyle} className="px-3 py-3">
        <div className="d-flex flex-column gap-4">
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
              <span style={marginStyles} className="useAppWhite fs-4 fw-bold">
                {duration}
              </span>
            </div>
          )}

          <div
            style={cardFooterStyles}
            className="d-flex align-items-center justify-content-between"
          >
            <CreatorProgressLabel progress={progress} />
            <TeamDisplay team={team} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
