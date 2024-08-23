import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import StickyNavbar from "../components/nav-bars/StickyNavbar";
import WelcomeCreator from "../assets/icons/welcome-creator.svg";
import WelcomeFreelancer from "../assets/icons/welcome-freelancer.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetAuthState } from "../store/auth/reducer";

const Buidl = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleClick = (type) => {
    dispatch(resetAuthState());
    navigate(`/auth/register?type=${type}`);
  };

  return (
    <Container fluid className="App" style={{ backgroundColor: "#272A38" }}>
      <StickyNavbar />
      <section
        className="flex justify-content-center"
        style={{
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <h2
          className="strongH2Tag"
          style={{
            color: "#EEA20E",
          }}
        >
          Welcome to Buidl
        </h2>
        <p
          className="normalPTag"
          style={{
            fontWeight: "600",
          }}
        >
          Why are you here ?
        </p>
        <div className="d-flex flex-column gap-3 pb-3">
          {buidlOffers.map(({ icon, type, heading, description }, index) => (
            <div
              className="d-flex flex-column align-items-start gap-4 flex-md-row align-items-md-center"
              style={{
                padding: "2rem",
                background: "#222532",
                border: "1px solid #3F4561",
                borderRadius: "20px",
                cursor: "pointer",
                opacity: index === 1 ? 0.6 : 1,
              }}
              onClick={() => handleClick(type)}
              key={index}
            >
              <div>{icon}</div>
              <div>
                <h2
                  style={{
                    color: "#EEA20E",
                    fontSize: "clamp(0.8rem, 1.8rem + 1.5vw, 1.68rem)",
                    fontWeight: "bold",
                  }}
                >
                  {heading}
                </h2>
                <p
                  style={{
                    fontSize: "clamp(0.8rem, 1.8rem + 1.5vw, 1.2rem)",
                    color: "#ffffff",
                    maxWidth: "40rem",
                  }}
                >
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <span
          className="normalPTag"
          style={{
            fontWeight: "600",
          }}
        >
          Already have an Account?{" "}
          <Link to="/auth/login">
            <span
              style={{
                color: "#EEA20E",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Login here,
            </span>
          </Link>
        </span>
      </section>
    </Container>
  );
};

export default Buidl;

const buidlOffers = [
  {
    icon: <WelcomeCreator />,
    heading: "Create Project",
    type: "builder",
    description:
      "Create what people need, and shape the future of Web3. Buidl welcomes all genres of projects, from entertainment, finance, and education to healthcare, gaming, art, and social impact.",
  },
  {
    icon: <WelcomeFreelancer />,
    heading: "Freelance",
    type: "freelancer",
    description:
      "Find jobs that shape the future, get highly paid, stay connected, and join the top 1% of talents driving the future of Web3.",
  },
];
