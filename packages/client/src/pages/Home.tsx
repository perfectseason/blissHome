import Navbar from "../components/ui/NavBar";
import Footer from "../components/ui/Footer";
import bag1 from "../assets/products/bag1.jpg"; // <- because Home.tsx is in pages
import bag2 from "../assets/products/bag2.jpg";
import bag3 from "../assets/products/bag3.jpg";
import shoe1 from "../assets/products/shoe1.jpg";
import shoe2 from "../assets/products/shoe2.jpg";
import watch1 from "../assets/products/watch1.jpg";
import watch2 from "../assets/products/watch2.jpg";
import watch4 from "../assets/products/watch4.jpg";
import watch5 from "../assets/products/watch5.jpg";

const products = [
  {
    id: 1,
    name: "bag",
    price: 40,
    image: bag1,
  },
  {
    id: 2,
    name: "bag2",
    price: 120,
    image: bag2,
  },
  {
    id: 3,
    name: "bag3",
    price: 150,
    image: bag3,
  },
  {
    id: 4,
    name: "shoe1",
    price: 120,
    image: shoe1,
  },
  {
    id: 5,
    name: "shoe2",
    price: 150,
    image: shoe2,
  },
  {
    id: 6,
    name: "watch1",
    price: 120,
    image: watch1,
  },
  {
    id: 7,
    name: "watch2",
    price: 150,
    image: watch2,
  },
  {
    id: 8,
    name: "watch4",
    price: 120,
    image: watch4,
  },
  {
    id: 9,
    name: "watch5",
    price: 150,
    image: watch5,
  },
];

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="pt-28 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold text-gray-500 leading-tight">
            Discover Premium Products <br />
            For Your Lifestyle
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Shop high-quality products at unbeatable prices.
          </p>

          <button className="mt-8 bg-blue-400 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Shop Now
          </button>
        </div>

        {/* Featured Products Section */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover rounded-md mb-4"
              />

              <h3 className="text-xl font-semibold">{product.name}</h3>

              <p className="text-gray-500 mt-2">${product.price}</p>

              <button className="mt-4 w-full bg-blue-400 text-white py-2 rounded-md hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
