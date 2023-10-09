import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import watch1 from '../../images/watch1.jpg'
import watch2 from '../../images/watch2.jpg'
import watch3 from '../../images/watch3.jpg'
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel className="carousel" activeIndex={ index } onSelect={ handleSelect }>
            <Carousel.Item>
                <img
                    className="d-bloc image k w-100"
                    src={ watch1 }
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="sliderHeading">Welcome to watch warehouse</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block image  w-100"
                    src={ watch2 }
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className="sliderHeading">We store diffent types of watch</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-bloc image k w-100"
                    src={ watch3 }
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className="sliderHeading">We have a big inventory</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;