import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const Slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }

    Slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    Slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />

      <div className="slider">
        <ul ref={Slider}>
          <li>
            <div className="Slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>lara</h3>
                  <span>Egypt</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                qui odio alias quasi nobis ad!
              </p>
            </div>
          </li>
          <li>
            <div className="Slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Amr</h3>
                  <span>Egypt</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                qui odio alias quasi nobis ad!
              </p>
            </div>
          </li>
          <li>
            <div className="Slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>sam</h3>
                  <span>Egypt</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                qui odio alias quasi nobis ad!
              </p>
            </div>
          </li>
          <li>
            <div className="Slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>osama</h3>
                  <span>Egypt</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                qui odio alias quasi nobis ad!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
