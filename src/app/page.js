
import "slick-carousel/slick/slick.css";
import Header from "./components/header";
import Project from "./components/project";
import Gallery from "./components/gallery";
import "slick-carousel/slick/slick-theme.css";
import HeroSection from "./components/herosection";
import CardCarousel from "./components/cardCrousel";
import VideoProduct from "./components/videoproduct";
import TwoSlider from "./components/twoslider";
import Carousel from "./components/carousel";
import Characters from "./components/characters";
import Ready from "./components/ready";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main >
      <Header />
      <HeroSection />
      <CardCarousel />
      <Gallery />
      <Project />
      <VideoProduct />
      <TwoSlider />
      <Carousel />
      <Characters />
      <Ready />
      <Footer />
      
    </main>
  );
}
