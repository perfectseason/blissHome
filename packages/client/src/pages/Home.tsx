import Navbar from "../components/ui/NavBar";
import Footer from "../components/ui/Footer";
import MyCarousel from "../components/MyCarousel";

export default function Home() {
  return (
    <div>
      <Navbar />

      <h1 className="text-2xl font-bold text-center mb-4">My Carousel</h1>

      <MyCarousel />

      <Footer />
    </div>
  );
}