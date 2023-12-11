'use client'
import { Button } from "@/components/elements/button/button"
import { H1, H2, Parag } from "@/components/elements/text/text"
import { Frame, Item } from "@/components/layout/layout"
import Style from './Hero.module.css';

const MainHero = (props) => {

    return (

        <>
            <Frame frame={Style.frame}>
                <Item style={Style.textItem}>
                    <H1 text={props.title}/>
                    <H2 text={props.subtitle} style={Style.h2}/>
                    <Parag text={props.description}/>
                    <Button text={props.button} buttonStyle={props.buttonStyle}/>
                </Item>
            </Frame>
            
        
        </>

    )

}

export default MainHero;