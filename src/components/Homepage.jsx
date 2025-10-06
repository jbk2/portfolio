import HeroSection from './HeroSection';
import TechCarousel from './TechCarousel';
import Introduction from './Introduction';
import Courses from './Courses';
import ProjectCarousel from './ProjectCarousel';
import Content from './Content';

export default function Homepage() {

  return(
    <div>
      <HeroSection />
      <TechCarousel />
      <Introduction />
      <ProjectCarousel />
      <Courses />
      {/* <Content /> */}
    </div>
  )
}