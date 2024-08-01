import CreatorLayout from "../components/layouts";
import EnhancedBreadcrumb from "../components/layouts/EnhancedBreadcrumb ";
import Directories from "./components/Directories";

const PartnerDirectories = () => {
  return (
    <div className="fullHeightWithColorBg">
      <CreatorLayout />
      <EnhancedBreadcrumb currentValue="Partner Directories" />
      <Directories />
    </div>
  );
};

export default PartnerDirectories;
