import Carousel from "../Carousel";
import Banner from "../Banner";
import Navbar from "../Navbar";
import "./App.css";
import Card from "../Cards";
import Cards from "../Cards";
import Footer from "../Footer";

function App() {
  return (
    <div className="App overflow-y-auto overflow-x-hidden">
      <Navbar />
      <Banner />
      <Carousel />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
