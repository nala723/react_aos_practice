import { useEffect } from "react";
import "./Boxes.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false
    });
  }, []);

  return (
    <div className="Appp">
      <h1>HELLO</h1>
      <div className="grids">
        <div data-aos="zoom-in-up" className="boxes">
          1
        </div>
        <div data-aos="zoom-in-up" data-aos-delay="200" className="boxes">
          2
        </div>
        <div data-aos="fade-up" className="boxes">
          3
        </div>
        <div data-aos="fade-right" className="boxes">
          4
        </div>
        <div data-aos="fade-left" className="boxes">
          5
        </div>
        <div data-aos="flip-right" className="boxes">
          6
        </div>
        <div data-aos="fade-up" className="boxes">
          7
        </div>
        <div data-aos="fade-up-right" className="boxes">
          8
        </div>
        <div data-aos="fade-up-left" className="boxes">
          9
        </div>
        <div data-aos="flip-up" className="boxes">
          10
        </div>
      </div>
    </div>
  );
}
