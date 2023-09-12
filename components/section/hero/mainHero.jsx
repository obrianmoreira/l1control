'use client'
import { Button } from "@/components/elements/button/button"
import { H1, H2, H3, Parag } from "@/components/elements/text/text"
import { Card, Frame, Item, Wall } from "@/components/layout/layout"
import { useState } from "react"
import Style from './Hero.module.css';
import Image from "next/image"
import Form, { PriceCalculator } from "@/components/elements/form/form"
import { Hero } from "@/components/layout/layout"
import imgSrc from './images/back.jpg'
import Field from "@/components/elements/form/field/field"

const MainHero = (props) => {

    return (

        <>
        
            <Hero style={Style.hero} frame={Style.heroFrame}>
                <Item style={Style.textItem}>
                    <H1 text={props.title}/>
                    <H2 text={props.subtitle} style={Style.h2}/>
                    <Parag text={props.description}/>
                    <Button text={props.button}/>
                </Item>
                <Card style={Style.formItem}>
                    <H3 text="Talk with our team" style={Style.h3}/>
                    <Parag text="Add your info bellow"/>
                    <Field label="Your Name" placeholder="First and second name" labelId={Style.firstField}/>
                    <Field label="Your Email" placeholder="example@example.com"/>
                    <Field label="Your Phone" placeholder="(+31) 6 9999-0000"/>
                    <Button text="Submit" style={Style.button}/>
                    <Parag text="We will never share your information." style={Style.spamParag}/>
                </Card>
            </Hero> 
        
        </>

    )

}

export default MainHero;