import Carousel from 'react-bootstrap/Carousel';
import slide2 from './Downloads/Slide9.JPG';
import slide3 from './Downloads/Slide10.JPG';
import slide4 from './Downloads/Slide11.JPG';
import slide5 from './Downloads/Slide12.JPG';

function ProfessionalServices() {
  return (
    <Carousel style = {{marginTop: "-20px"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide5}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ProfessionalServices;