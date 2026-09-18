import { lazy, Suspense } from "react";
import "./App.css";
import Navbar from './components/Navbar'
import HeroSection from "./components/HeroSection"


const PartnerSection = lazy(
  () => import("./components/PartnerSection")
);

const PerformanceMotion = lazy(
  () => import("./components/PerformanceMotion")
);

const SmartSection = lazy(
  () => import("./components/SmartSection")
);

const ScienceSection = lazy(
  () => import("./components/ScienceSection")
);

const Stats = lazy(
  () => import("./components/Stats")
);

const FinalCTA = lazy(
  () => import("./components/FinalCTA")
);

const Footer = lazy(
  () => import("./components/Footer")
);
const App = () => {
  return (
    <>
  <Navbar/>
  <HeroSection/>
    <Suspense fallback={<div>Loading...</div>}>
    
  <PartnerSection/>
  <SmartSection/>
  <ScienceSection/>
  <Stats/>
  <PerformanceMotion/>
  <FinalCTA/>
  <Footer/>
    </Suspense>
</>
  )
}

export default App