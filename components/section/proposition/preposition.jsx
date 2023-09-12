'use client'
import { Wall, Frame, Item } from "@/components/layout/layout";
import { H2, Parag } from "@/components/elements/text/text";
import { Button } from "@/components/elements/button/button";
import { useState } from "react";
import Style from './Preposition.module.css';
import { Carousel } from "../../elements/carousel/carousel";

const Preposition = (props) => {

    const [firstImage, setFirstImage] = useState(true);
    const [secondImage, setSecondImage] = useState(false);
    const [thirdImage, setThirdImage] = useState(false);

    const [firstResultImage, setFirstResultImage] = useState(true);
    const [secondResultImage, setSecondResultImage] = useState(true);
    const [thridResultImage, setThirdResultImage] = useState(true);

    const handleBtnOne = () => {
        setFirstImage(true);
        setSecondImage(false);
        setThirdImage(false);
    }

    const handleBtnTwo = () => {
        setFirstImage(false);
        setSecondImage(true);
        setThirdImage(false);
    }

    const handleBtnThree = () => {
        setFirstImage(false);
        setSecondImage(false);
        setThirdImage(true);
    }

    const handleResultBtn = () => {

        setFirstResultImage(!firstResultImage);

    }
    const handleSecondResultBtn = () => {

        setSecondResultImage(!secondResultImage);

    }

    const handleThirdResultBtn = () => {

        setThirdResultImage(!thridResultImage);

    }

    return (

        <>
        
            <Wall style={Style.wall}>
                <Frame style={Style.frame}>
                    <Carousel
                        firstImage={firstImage}
                        beforeFirstImage={Style.beforeFirstImage}
                        afterFirstImage={Style.afterFirstImage}
                        handleResultBtn={handleResultBtn}
                        firstResultImage={firstResultImage}
                        secondImage={secondImage}
                        beforeSecondImage={Style.beforeSecondImage}
                        afterSecondImage={Style.afterSecondImage}
                        handleSecondResultBtn={handleSecondResultBtn}
                        secondResultImage={secondResultImage}
                        thirdImage={thirdImage}
                        beforeThirdImage={Style.beforeThirdImage}
                        afterThirdImage={Style.afterThirdImage}
                        handleThirdResultBtn={handleThirdResultBtn}
                        thridResultImage={thridResultImage}
                    />
                    <Item style={Style.textItem}>
                        <H2 text={props.title} style={Style.h2}/>
                        <Parag text={props.firstParag}/>
                        <Frame style={Style.innerFrame}>
                            <Button text="Bathroom" style={Style.buttonFrame} buttonClick={handleBtnTwo}/>
                            <Button text="Kitchens" style={Style.buttonFrame} buttonClick={handleBtnOne}/>
                            <Button text="Living Room" style={Style.buttonFrame} buttonClick={handleBtnThree}/>
                        </Frame>
                    </Item>
                </Frame>
            </Wall>

        </>

    )

}

export default Preposition;