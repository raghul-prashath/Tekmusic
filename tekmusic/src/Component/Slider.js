import BackgroundSlider from 'react-background-slider';

import image1 from '../Assets/Images/slider1.jpg';
import image2 from '../Assets/Images/slider2.jpg';
import image3 from '../Assets/Images/slider3.jpg';

export default function Slider(){
    return(
        <div style={{display:"block"}}>
          <BackgroundSlider images={[image1, image2, image3]} duration={4} transition={1} />
          <div className="bgslider">
            <div className="justify-content-md-center maincontent"><font>Official Music Club</font></div>     
            <div className="justify-content-md-center maincontent"><font>Psg College of Technology</font></div>     
            <button className="button">
                <div className="text-bt">
                    JOIN NOW
                </div>
            </button>
          </div>
        </div>
    )
}