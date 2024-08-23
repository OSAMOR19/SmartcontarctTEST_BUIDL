import { Image } from "react-bootstrap";
import images from "../../../../../constants/images";

const TeamDisplay = ({ team }) => {
  if (!team || team.length === 0) return null;

  const teamInfo =
    team.length === 1 ? (
      <div className="d-flex gap-1 align-items-center">
        <Image
          src={images.noTeam.src}
          alt={images.noTeam.alt}
          width={42}
          height={42}
        />
        {team.map(({ name, role }, index) => (
          <div className="d-flex flex-column" key={index}>
            <span
              className="fs-6 fw-medium"
              style={{
                color: "#A0A0A0",
                marginBottom: "-10px",
              }}
            >
              {role}
            </span>
            <span className="fs-5 fw-medium normalPTag">{name}</span>
          </div>
        ))}
      </div>
    ) : (
      <div className="d-flex gap-1 align-items-center">
        <div className="position-relative">
          <Image
            src={images.noTeam.src}
            alt={images.noTeam.alt}
            width={42}
            height={42}
          />
          <Image
            src={images.plusOneTeam.src}
            alt={images.plusOneTeam.alt}
            width={42}
            height={42}
            className="position-absolute end-50"
          />
        </div>
        <div>
          <span className="useAppWhite fw-medium">
            {getTeamText(team.length)}
          </span>
        </div>
      </div>
    );

  return <div>{teamInfo}</div>;
};

const getTeamText = (teamLength) => {
  if (teamLength === 2) {
    return "2 Applicants";
  } else {
    return `+${teamLength - 1} Applicants`;
  }
};

export default TeamDisplay;