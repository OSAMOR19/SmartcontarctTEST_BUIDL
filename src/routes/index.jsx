import { Routes, Route } from "react-router-dom";

// import css
import "../styles/utilities.css";
import "../styles/utilities-responsive.css";

// scroll to top
import ScrollToTop from "./ScrollToTop";

// routes
import Buidl from "../pages/Buidl";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Verification from "../pages/auth/Verification";
import OtpInputResend from "../components/verifications/InputOtpResend";
import ForgetPassword from "../pages/auth/ForgetPassword";
import OtpSent from "../components/verifications/OtpSent";
import ResetPassword from "../pages/auth/ResetPassword";
import CreatorDashboard from "../pages/creator/dashboard";
import CreateProject from "../pages/creator/create-project";
import Projects from "../pages/creator/projects";
import ProjectDetails from "../pages/creator/project-details";
import Wallet from "../pages/creator/wallet";
import MultiAiTools from "../pages/creator/multi-al";
import PartnerDirectories from "../pages/creator/partner-directories";

const RootRouter = () => {
  return (
    <ScrollToTop>
      <Routes>
        {/* landing page */}
        <Route exact path="/" element={<Buidl />} />

        {/* auth routes */}
        <Route exact path="/auth/login" element={<Login />} />
        <Route exact path="/auth/register" element={<Register />} />
        <Route exact path="/auth/otp" element={<OtpSent />} />
        <Route exact path="/auth/verification" element={<Verification />} />
        <Route
          exact
          path="/auth/forget-password"
          element={<ForgetPassword />}
        />
        <Route exact path="/auth/reset-password" element={<ResetPassword />} />
        <Route
          exact
          path="/auth/input-otp-resend"
          element={<OtpInputResend />}
        />

        {/* creator routes */}
        <Route exact path="/creator/dashboard" element={<CreatorDashboard />} />
        <Route
          exact
          path="/creator/create-project"
          element={<CreateProject />}
        />

        <Route exact path="/creator/projects" element={<Projects />} />
        <Route
          exact
          path="/creator/project/details/:id"
          element={<ProjectDetails />}
        />
        <Route exact path="/creator/wallet" element={<Wallet />} />
        <Route exact path="/creator/multi-ai" element={<MultiAiTools />} />
        <Route
          exact
          path="/creator/partner-directories"
          element={<PartnerDirectories />}
        />
      </Routes>
    </ScrollToTop>
  );
};

export default RootRouter;
