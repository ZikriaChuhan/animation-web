
import "slick-carousel/slick/slick.css";
import Header from "./components/header";
import Project from "./components/project";
import Gallery from "./components/gallery";
import "slick-carousel/slick/slick-theme.css";
import HeroSection from "./components/herosection";
import CardCarousel from "./components/cardCrousel";

export default function Home() {
  return (
    <main >
      <Header />
      <HeroSection />
      <CardCarousel />
      <Gallery />
      <Project />
    </main>
  );
}
