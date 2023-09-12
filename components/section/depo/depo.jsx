'use client'
import { Carousel } from "@/components/elements/carousel/carousel"
import { Wall, Frame, Item } from "@/components/layout/layout"
import Style from '../depo/Depo.module.css'
import { useState } from "react";
import { H2, H3, Parag } from "@/components/elements/text/text";

const Depo = (props) => {
    
    const [firstImage, setFirstImage] = useState(true);
    const [firstResultImage, setFirstResultImage] = useState(true);

    const handleResultBtn = () => {

        setFirstResultImage(!firstResultImage);

    }

    return (

        <>
        
            <Wall>
                <Frame>
                    <Carousel
                        firstImage={firstImage}
                        beforeFirstImage={Style.beforeFirstImage}
                        afterFirstImage={Style.afterFirstImage}
                        firstResultImage={firstResultImage}
                        handleResultBtn={handleResultBtn}
                    />
                    <Item>
                        <H2 text={props.title}/>
                        <H3 text={props.subtitle}/>
                        <Parag text={props.description}/>
                    </Item>
                </Frame>
            </Wall>
        
        </>

    )
}

export default Depo;