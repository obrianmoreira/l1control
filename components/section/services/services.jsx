import { Wall, Frame, Item } from "@/components/layout/layout";
import { H2, Parag } from "@/components/elements/text/text";
import { Button } from "@/components/elements/button/button";
import Style from './Services.module.css';
import Image from "next/image";
import imgSrc from './images/house.jpg';

const Services = () => {

    return (

        <>

            <Wall style={Style.wall}>
                <Frame style={Style.frame}>
                    <Item style={Style.imgItem}>
                        <Image
                            className={Style.img}
                            alt="img"
                            src={imgSrc}
                        />
                    </Item>
                    <Item style={Style.textItem}>
                        <H2 text="20% Discount in your renovation"/>
                        <Parag text="A variety of materials (like cast iron, stainless steel, ceramic, and wood) set you up for success and serve different purposes in your kitchen. We've got them all. If you need help figuring out which is best for you, or what it takes to roast a chicken, we’re here."/>
                    </Item>
                </Frame>
            </Wall>
        
        </>

    )

}

export default Services;