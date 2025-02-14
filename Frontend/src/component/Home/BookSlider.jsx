import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function BookSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3
  };
  return (
    <div className="slider-container relative bottom-8 lg:bottom-14 w-[80%]">
      <Slider {...settings}>
        <div>
          <img  src="https://static.wixstatic.com/media/ea71bb_e32bedf7bba24af49bc918269b116f0c~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ea71bb_e32bedf7bba24af49bc918269b116f0c~mv2_d_2479_2483_s_4_2.jpg" alt="image" />
        </div>
        <div>
           <img  src="https://static.wixstatic.com/media/ea71bb_e32bedf7bba24af49bc918269b116f0c~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ea71bb_e32bedf7bba24af49bc918269b116f0c~mv2_d_2479_2483_s_4_2.jpg" alt="image" />
        </div>
        <div>
        <img  src="https://static.wixstatic.com/media/ea71bb_e32bedf7bba24af49bc918269b116f0c~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ea71bb_e32bedf7bba24af49bc918269b116f0c~mv2_d_2479_2483_s_4_2.jpg" alt="image" />
        </div>
        <div>
        <img  src="https://static.wixstatic.com/media/ea71bb_e32bedf7bba24af49bc918269b116f0c~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ea71bb_e32bedf7bba24af49bc918269b116f0c~mv2_d_2479_2483_s_4_2.jpg" alt="image" />
        </div>
        <div>
        <img  src="https://static.wixstatic.com/media/ea71bb_e32bedf7bba24af49bc918269b116f0c~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ea71bb_e32bedf7bba24af49bc918269b116f0c~mv2_d_2479_2483_s_4_2.jpg" alt="image" />
        </div>
        <div>
        <img  src="https://static.wixstatic.com/media/ea71bb_e32bedf7bba24af49bc918269b116f0c~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ea71bb_e32bedf7bba24af49bc918269b116f0c~mv2_d_2479_2483_s_4_2.jpg" alt="image" />
        </div>
        <div>
        <img  src="https://static.wixstatic.com/media/ea71bb_e32bedf7bba24af49bc918269b116f0c~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ea71bb_e32bedf7bba24af49bc918269b116f0c~mv2_d_2479_2483_s_4_2.jpg" alt="image" />
        </div>
        <div>
        <img  src="https://static.wixstatic.com/media/ea71bb_e32bedf7bba24af49bc918269b116f0c~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ea71bb_e32bedf7bba24af49bc918269b116f0c~mv2_d_2479_2483_s_4_2.jpg" alt="image" />
        </div>
        <div>
        <img  src="https://static.wixstatic.com/media/ea71bb_e32bedf7bba24af49bc918269b116f0c~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ea71bb_e32bedf7bba24af49bc918269b116f0c~mv2_d_2479_2483_s_4_2.jpg" alt="image" />
        </div>
      </Slider>
    </div>
  );
}




export default BookSlider;
