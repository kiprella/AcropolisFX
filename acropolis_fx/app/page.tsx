// pages/index.tsx
import MarketData from "./components/MarketData";
import Navbar from "./components/navbar/Navbar";
import TradingViewWidget from "./components/TradingView/TradingViewWidget";



function HomePage() {
  return (
    <div>
      <Navbar/>
      {/* <MarketData/> */}
      <TradingViewWidget/>
    </div>
  );
}

export default HomePage;
