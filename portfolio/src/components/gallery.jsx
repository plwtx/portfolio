import "../App.css";
import img1 from "../img/gallery/1.png";
import img2 from "../img/gallery/2.png";
import img3 from "../img/gallery/3.png";
import img4 from "../img/gallery/4.png";
import img5 from "../img/gallery/5.png";
import img6 from "../img/gallery/6.png";
import img7 from "../img/gallery/7.png";
import img8 from "../img/gallery/8.png";
import img9 from "../img/gallery/9.png";
import AGJP from "../img/AGJP.svg";

export default function Gallery() {
  return (
    <div className="snap-start min-h-screen bg-len-Black p-3">
      {/* Name */}
      <h1 className=" text-len-White lg:collapse tracking-widest py-9 md:py-0 text-center whitespace-normal p-3 leading-none font-LineB px-9 text-[5rem]  ">
        美術館
      </h1>
      <div className="lg:grid lg:m-10 lg:grid-cols-2 lg:gap-2 lg:place-content-center">
        <div className="collapse lg:visible relative">
          <img className="absolute w-[40vw] " src={AGJP} alt="" />
        </div>
        {/* Gallery Tab */}
        <div id="Gallery" className="flex justify-center items-center">
          <div className="grid grid-cols-3 px-3 gap-3 lg:gap-3 lg:grid-cols-3 lg:px-12">
            <img className="" src={img1} alt="1st Drawing" />
            <img className="" src={img2} alt="2nd Drawing" />
            <img className="" src={img3} alt="3rd Drawing" />
            <img className="" src={img4} alt="4th Drawing" />
            <img className="" src={img5} alt="5th Drawing" />
            <img className="" src={img6} alt="6th Drawing" />
            <img className="" src={img7} alt="7th Drawing" />
            <img className="" src={img8} alt="8th Drawing" />
            <img className="" src={img9} alt="9th Drawing" />
          </div>
        </div>
      </div>
    </div>
  );
}
