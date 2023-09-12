import { H2, H4, Parag } from "@/components/elements/text/text"
import { Wall, Frame, Card, Item } from "@/components/layout/layout"
import Style from './Benefits.module.css'
import {PiNumberSquareOneFill, PiNumberSquareTwoFill, PiNumberSquareThreeFill, PiNumberSquareFourFill, PiNumberFiveBold} from 'react-icons/pi'
import Image from "next/image"
import firstImgSrc from './images/img1.jpg'
import secondImgSrc from './images/img2.jpg'
import thirdImgSrc from './images/img3.jpg'
import { useState } from "react"

const Benefits = (props) => {

    return (
        <>
        
            <Wall style={Style.wall}>
                <H2 text={props.title}/>
                <Parag text={props.description}/>
                <Frame style={Style.frame}>
                    <Card style={Style.card}>
                        <Image
                            className={Style.img}
                            src={firstImgSrc}
                            alt="img"
                            priority={true}
                        />
                        <Item style={Style.cardText}>
                            <H4 text={props.firstBenefit} style={Style.h4}/>
                            <Parag text={props.firstBenefitDesc} />
                        </Item>
                    </Card>
                    <Card style={Style.card}>
                        <Image
                            className={Style.img}
                            src={secondImgSrc}
                            alt="img"
                            priority={true}
                        />

                        <Item style={Style.cardText}>
                            <H4 text={props.secondBenefit} style={Style.h4}/>
                            <Parag text={props.secondBenefitDesc} />
                        </Item>
                    </Card>
                    <Card style={Style.card}>
                        <Image
                            className={Style.img}
                            src={thirdImgSrc}
                            alt="img"
                            priority={true}
                        />

                        <Item style={Style.cardText} >
                            <H4 text={props.thirdBenefit} style={Style.h4}/>
                            <Parag text={props.thirdBenefitDesc} />
                        </Item>
                    </Card>
                </Frame>
            </Wall>
        
        </>
    )

}

export default Benefits;