import { Image } from "react-bootstrap";
import images from "../../../../constants/images";

const TeamDisplay = ({ team }) => {
  if (team === 0) return null;

  const teamInfo =
    team === 1 ? (
      <div className="d-flex gap-2 align-items-center">
        <Image
          src={images.noTeam.src}
          alt={images.noTeam.alt}
          width={42}
          height={42}
        />
        <div className="d-flex flex-column">
          <span
            className="fs-6 fw-medium"
            style={{
              color: "#A0A0A0",
              marginBottom: "-10px",
            }}
          >
            Project Manager
          </span>
          <span className="fs-5 fw-medium normalPTag">Jackson</span>
        </div>
      </div>
    ) : (
      <div className="d-flex gap-2 align-items-center">
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
          <span className="fw-medium">{`+${team - 2} Teams`}</span>
        </div>
      </div>
    );

  return <div>{teamInfo}</div>;
};

export default TeamDisplay;
