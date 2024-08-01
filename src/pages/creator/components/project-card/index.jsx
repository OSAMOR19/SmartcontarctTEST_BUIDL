import { Link } from "react-router-dom";
import CreatorProgressLabel from "./CreatorProgressLabel";
import TeamDisplay from "./TeamDisplay";

const ProjectCard = ({ project }) => {
  const { id, title, description, duration, progress, team, status } = project;
  const isDraft = status === "draft";

  const cardStyle = {
    width: "100%",
    height: "100%",
    color: "#FFFFFF",
    background: "#222532",
    fontSize: "clamp(0.8rem, 0.8rem + 1.5vw, 1.125rem)",
    border: "1px solid #565F87",
    borderRadius: "17px",
  };

  return isDraft ? (
    <div style={cardStyle} className="px-3 py-3">
      <div className="d-flex flex-column gap-3">
        {title && (
          <h4
            className="normalPTag"
            style={{
              fontWeight: "700",
            }}
          >
            {title}
          </h4>
        )}
        {description && (
          <p
            className="normalPTag"
            style={{
              color: "#D1D1D1",
            }}
          >
            {description}
          </p>
        )}

        {duration && (
          <div className="d-flex flex-column">
            <span className="normalPTag">Duration</span>
            <span
              style={{
                fontSize: "clamp(1rem, 0.87rem + 1.5vw, 1.12rem)",
                color: "#FFFFFF",
                fontWeight: "700",
              }}
            >
              {duration}
            </span>
          </div>
        )}
        <div>
          <span
            style={{
              color: "#EEA20E",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            className="fs-5"
          >
            Continue Project Creation
          </span>
        </div>
        <div
          style={{
            borderTop: "2px solid #565F87",
            paddingTop: "1rem",
          }}
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
        <div className="d-flex flex-column gap-3">
          {title && (
            <h4
              className="normalPTag"
              style={{
                fontWeight: "700",
              }}
            >
              {title}
            </h4>
          )}
          {description && (
            <p
              className="normalPTag"
              style={{
                color: "#D1D1D1",
              }}
            >
              {description}
            </p>
          )}

          {duration && (
            <div className="d-flex flex-column">
              <span className="normalPTag">Duration</span>
              <span
                style={{
                  fontSize: "clamp(1rem, 0.87rem + 1.5vw, 1.12rem)",
                  color: "#FFFFFF",
                  fontWeight: "700",
                }}
              >
                {duration}
              </span>
            </div>
          )}
          <div
            style={{
              borderTop: "2px solid #565F87",
              paddingTop: "1rem",
            }}
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
