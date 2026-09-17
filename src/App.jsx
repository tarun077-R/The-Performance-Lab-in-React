import "./App.css";
import Navbar from './components/Navbar'
import HeroSection from "./components/HeroSection"
import PartnerSection from './components/PartnerSection'
import SmartSection from './components/SmartSection'
import ScienceSection from './components/ScienceSection'
import Stats from './components/Stats'
import PerformanceMotion from './components/PerformanceMotion'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
  <Navbar/>
  <HeroSection/>
  <PartnerSection/>
  <SmartSection/>
  <ScienceSection/>
  <Stats/>
  <PerformanceMotion/>
  <FinalCTA/>
  <Footer/>
</>
  )
}

export default App