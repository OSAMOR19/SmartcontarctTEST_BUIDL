import CreatorLayout from "../components/layouts";
import EnhancedBreadcrumb from "../components/layouts/EnhancedBreadcrumb ";
import Overview from "./components/Overview";
import Transactions from "./components/Transactions";

const Wallet = () => {
  return (
    <div className="fullHeightWithColorBg">
      <CreatorLayout />
      <EnhancedBreadcrumb currentValue="Wallet" />
      <Overview />
      <Transactions />
    </div>
  );
};

export default Wallet;
