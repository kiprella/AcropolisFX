// pages/index.tsx
import MarketData from "./components/MarketData";
import Navbar from "./components/navbar/Navbar";



function HomePage() {
  return (
    <div>
      <Navbar/>
      <MarketData/>
    </div>
  );
}

export default HomePage;
