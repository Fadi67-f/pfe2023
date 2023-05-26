import React, { useState } from 'react'
import {  Carousel } from 'react-bootstrap'
import sliderimg from "../images/test.jpg";
import slider4 from "../images/test1.jpg";
import prod3 from "../images/test2.jpg";
import prod4 from "../images/test3.jpg";


const Silder = () => {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="slider-background" interval={2000}>
                     
                        <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "296px", width: "313.53px",backgroundImage:"black" }}
                        className=""
                        src={slider4}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title">Il y a une grande réduction</h3>
                        <p className="slider-text">Réduction jusqu'à 20% sur votre achat</p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className="slider-background2" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "296px", width: "313.53px" }}
                        className=""
                        src={sliderimg}
                        alt="First slide"
                    />
                    <div className="">
                    <h3 className="slider-title">Il y a une grande réduction</h3>
                        <p className="slider-text">Réduction jusqu'à 20% sur votre achat</p>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item className="slider-background3" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "296px", width: "373.53px" }}
                        className=""
                        src={prod3}
                        alt="First slide"
                    />
                    <div className="">
                    <h3 className="slider-title">Il y a une grande réduction</h3>
                        <p className="slider-text">Réduction jusqu'à 20% sur votre achat</p>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item className="slider-background4" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "296px", width: "373.53px" }}
                        className=""
                        src={prod4}
                        alt="First slide"
                    />
                    <div className="">
                    <h3 className="slider-title">Il y a une grande réduction</h3>
                        <p className="slider-text">Réduction jusqu'à 20% sur votre achat</p>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default Silder
