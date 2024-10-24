import Carousel from 'react-bootstrap/Carousel';
import  Image  from 'react-bootstrap/Image';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src="/images/Banner_01.jpg" fluid />
        <Carousel.Caption>
          <h3>hi</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src='/images/Banner_02.jpg' fluid />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src='/images/Banner_03.jpg' fluid />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;