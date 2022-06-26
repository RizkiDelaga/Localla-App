import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function ExamplePage() {
    return (
        <>
        <OwlCarousel
                nav={true}
                dots={false}
                center={true}
                loop={true}
                autoplay={true}
                autoplayTimeout={"3000"}
                responsive={{
                    0: {
                        items: 1,
                        margin: 10,

                    },
                    610: {
                        items: 2,
                        margin: 20,

                    },
                    960: {
                        items: 2,
                        margin: 30,
                    },
                    1140: {
                        items: 2,
                        stagePadding: 100,
                        margin: 80
                    }
                }}>
            <div >
                <h4>1</h4>
            </div>
            <div >
                <h4>2</h4>
            </div>
            <div >
                <h4>3</h4>
            </div>
            <div >
                <h4>4</h4>
            </div>
            <div >
                <h4>5</h4>
            </div>
            <div >
                <h4>6</h4>
            </div>
            <div >
                <h4>7</h4>
            </div>
            <div >
                <h4>8</h4>
            </div>
            <div >
                <h4>9</h4>
            </div>
            <div >
                <h4>10</h4>
            </div>
            <div >
                <h4>11</h4>
            </div>
            <div >
                <h4>12</h4>
            </div>
        </OwlCarousel>
        </>
    );
}

export default ExamplePage;