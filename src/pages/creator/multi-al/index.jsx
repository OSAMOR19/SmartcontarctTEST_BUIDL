import CreatorLayout from "../components/layouts";
import EnhancedBreadcrumb from "../components/layouts/EnhancedBreadcrumb ";
import AiTools from "./components/AiTools";

const MultiAiTools = () => {
  return (
    <div className="fullHeightWithColorBg">
      <CreatorLayout />
      <EnhancedBreadcrumb currentValue="Multi-Ai Tools" />
      <AiTools />
    </div>
  );
};

export default MultiAiTools;
