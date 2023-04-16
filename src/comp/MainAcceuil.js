import React from "react";
import "./MainAcceuil.css";
import img2 from '../image/caroussel1.png';
import img3 from '../image/caroussel2.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import StepsAcceuil from '../comp/stepsAcceuil';
import Telecharge from '../comp/telechargeAcceuil';

const MainAcceuil = ({ pageName }) => {
  return (
    <>
      <div>
        <div className="blockcaroussel">
          <Carousel autoPlay infiniteLoop showThumbs={false} interval={"2000"}>
            <img src={img2} alt="X" />
            {/* <p className="legend">Main</p> */}
            {/* </div>
                <div style={{paddingTop:"23.5rem"}}> */}
            <img src={img3} alt="Y" />
            {/* <p className="legend">Legend 2</p> */}

          </Carousel>
        </div>
      </div>

      <Telecharge />



      <StepsAcceuil />

    </>
  );
};

export default MainAcceuil;
