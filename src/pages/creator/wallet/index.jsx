import CreatorLayout from "../components/layouts";
import Overview from "./components/Overview";
import Transactions from "./components/Transactions";

const Wallet = () => {
  return (
    <div className="fullHeightWithColorBg">
      <CreatorLayout />
      <Overview />
      <Transactions />
    </div>
  );
};

export default Wallet;
