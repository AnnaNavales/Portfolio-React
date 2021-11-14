import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="Screenshot2021-11-13-145045.png" />
                    <p className="Horiseon">Horiseon 1</p>
                </div>
                <div>
                    <img src="Screenshot 2021-11-13-14502.png" />
                    <p className="Budget Tracker">Budget tracker 2</p>
                </div>
                <div>
                    <img src="Screenshot 2021-11-13-150029.png" />
                    <p className="Moving Picture potion">Moving Picture Potion 3</p>
                </div>
            </Carousel>
        );
    }
};

ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default Portfolio;

