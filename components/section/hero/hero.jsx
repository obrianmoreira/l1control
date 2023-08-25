'use client'
import { Button } from "@/components/elements/button/button"
import { H1, H2, H3, Parag } from "@/components/elements/text/text"
import { Frame, Item, Wall } from "@/components/layout/layout"
import { useState } from "react"
import Style from './Hero.module.css';
import Image from "next/image"
import Form, { PriceCalculator } from "@/components/elements/form/form"

const Hero = (props) => {

    return (

        <>
        
            <CarouselHero 
                title="Call to Action"
                subtitle="Sub Call to Action"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum explicabo, iusto molestias vel, repellendus voluptatem explicabo."
                button="One" buttonTwo="Two" buttonThree="Three"
                imgPath={props.imgPath}
                imgPathTwo={props.imgPathTwo}
                imgPathThree={props.imgPathThree}
            />
            <SideImage
                title="Call to Action"
                subtitle="Sub Call to Action"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum explicabo, iusto molestias vel, repellendus voluptatem explicabo."
                imgPath={props.sideImage}
                imgAlt={props.sideImageAlt}
                button="Know More"
            />
            <SideForm
                title="Call to Action"
                subtitle="Sub Call to Action"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum explicabo, iusto molestias vel, repellendus voluptatem explicabo."
                formTitle="Subscribe Bellow"
                formDescription="Lorem ipsum dolor sit, amet consectetur elit."
                name="Nome"
                email="Email"
                phone="Telefone"
                button="Enviar"
            />
            <SideCalculator
                title="Call to Action"
                subtitle="Sub Call to Action"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum explicabo, iusto molestias vel, repellendus voluptatem explicabo."
                formTitle="Subscribe Bellow"
                formDescription="Lorem ipsum dolor sit, amet consectetur elit."
                name="Nome"
                email="Email"
                phone="Telefone"
                button="Enviar"
            />
            <BackgroundImage
                title="Call to Action"
                subtitle="Sub Call to Action"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum explicabo, iusto molestias vel, repellendus voluptatem explicabo."
                backgroundImgPath={props.backgroundImgPath}
            />
            <CenterForm
                title="Call to Action"
                subtitle="Sub Call to Action"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum explicabo, iusto molestias vel, repellendus voluptatem explicabo."
                formTitle="Subscribe Bellow"
                formDescription="Lorem ipsum dolor sit, amet consectetur elit."
                name="Nome"
                email="Email"
                phone="Telefone"
                button="Enviar"
            />
            <CenterImage
                title="Call to Action"
                subtitle="Sub Call to Action"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum explicabo, iusto molestias vel, repellendus voluptatem explicabo."
                centerImagPath={props.centerImagPath}
                centerImagAlt={props.centerImagAlt}
            />
        
        </>

    )

}

export const CarouselHero = (props) => {

    const [firstCarousel, setFirstCarousel] = useState(true);
    const [secondCarousel, setSecondCarousel] = useState(false);
    const [thirdCarousel, setThirdCarousel] = useState(false);

    let imgPath = props.imgPath;
    let imgPathTwo = props.imgPathTwo;
    let imgPathThree = props.imgPathThree;

    const firstCarouselCss = {
        backgroundImage: `url(${imgPath})`,
        backgroundSize: "cover",
    };

    const handleBtnClick = () => {

        setFirstCarousel(true);
        setSecondCarousel(false);
        setThirdCarousel(false)

    }

    const secondCarouselCss = {
        backgroundImage: `url(${imgPathTwo})`,
        backgroundSize: "cover",
    };

    const handleSecondBtnClick = () => {

        setFirstCarousel(false);
        setSecondCarousel(true);
        setThirdCarousel(false)

    }

    const thirdCarouselCss = {
        backgroundImage: `url(${imgPathThree})`,
        backgroundSize: "cover",
    };

    const handleThirdBtnClick = () => {

        setFirstCarousel(false);
        setSecondCarousel(false);
        setThirdCarousel(true)

    }

    
    return (

        <>
        
            { firstCarousel ? 

                <Wall style={Style.carouselHero} css={firstCarouselCss}>
                    <H1 text={props.title}/>
                    <H2 text={props.subtitle}/>
                    <Parag text={props.description}/>
                    <Frame style={Style.frameCarouselHero}>
                        <Button text={props.button} buttonClick={handleBtnClick}/>
                        <Button text={props.buttonTwo} buttonClick={handleSecondBtnClick}/>
                        <Button text={props.buttonThree} buttonClick={handleThirdBtnClick}/>
                    </Frame>
                </Wall>
            : 
                (
                    
                    <></>

                )
            
            }

            { secondCarousel ? 

                <Wall style={Style.carouselHero} css={secondCarouselCss}>
                    <H1 text={props.title}/>
                    <H2 text={props.subtitle}/>
                    <Parag text={props.description}/>
                    <Frame style={Style.frameCarouselHero}>
                        <Button text={props.button} buttonClick={handleBtnClick}/>
                        <Button text={props.buttonTwo} buttonClick={handleSecondBtnClick}/>
                        <Button text={props.buttonThree} buttonClick={handleThirdBtnClick}/>
                    </Frame>
                </Wall>

            : 
                (
                    
                    <></>

                )
            
            }

            { thirdCarousel ? 

                <Wall style={Style.carouselHero} css={thirdCarouselCss}>
                    <H1 text={props.title}/>
                    <H2 text={props.subtitle}/>
                    <Parag text={props.description}/>
                    <Frame style={Style.frameCarouselHero}>
                        <Button text={props.button} buttonClick={handleBtnClick}/>
                        <Button text={props.buttonTwo} buttonClick={handleSecondBtnClick}/>
                        <Button text={props.buttonThree} buttonClick={handleThirdBtnClick}/>
                    </Frame>
                </Wall>

            : 
                (
                    
                    <></>

                )
            
            }
        
        </>

    )

}

export const SideImage = (props) => {

    let imgPath = props.imgPath;
    let imgAlt = props.imgAlt;

    const sideImageCss = {
        width: "100%",
        height: "100%"
    }
    
    return (

        <>
        
            <Wall style={Style.sideImage}>
                <Frame>
                    <Item>
                        <H1 text={props.title}/>
                        <H2 text={props.subtitle}/>
                        <Parag text={props.description}/>
                        <Button text={props.button}/>
                    </Item>
                    <Item>
                        <Image
                            alt={`esta imagem é sobre ${imgAlt}`}
                            src={imgPath}
                            style={sideImageCss}
                        />
                    </Item>
                </Frame>
            </Wall>
        
        </>

    )

}

export const BackgroundImage = (props) => {

    let imgPath = props.backgroundImgPath;

    const backgroundImageCss = {
        backgroundImage: `url(${imgPath})`,
        backgroundSize: "cover",
        textAlign: "center",
    }
    
    return (

        <>
        
            <Wall css={backgroundImageCss}>
                <H1 text={props.title}/>
                <H2 text={props.subtitle}/>
                <Parag text={props.description}/>
                <Button text={props.button}/>
            </Wall>
        
        </>

    )

}

export const SideForm = (props) => {

    let userCss = props.userCss;
    
    return (

        <>
        
            <Wall css={userCss}>
                <Frame>
                    <Item>
                        <H1 text={props.title}/>
                        <H3 text={props.subtitle}/>
                        <Parag text={props.description}/>
                        <Button text={props.button}/>
                    </Item>
                    <Item>
                        <Form
                            title={props.formTitle}
                            description={props.formDescription}
                            firstLabel={props.firstLabel}
                            firstField={props.firstField}
                            secondField={props.secondField}
                            thirdField={props.thirdField}
                            fourthField={props.fourthField}
                            button={props.button}
                            labelState="none"
                            css={props.formCss}
                        />
                    </Item>
                </Frame>
            </Wall>
        
        </>

    )

}

export const SideCalculator = (props) => {
    
    return (

        <>
        
            <Wall>
                <Frame>
                    <Item>
                        <H1 text={props.title}/>
                        <H2 text={props.subtitle}/>
                        <Parag text={props.description}/>
                        <Button text={props.button}/>
                    </Item>
                    <Item>
                        <PriceCalculator/>
                    </Item>
                </Frame>
            </Wall>
        
        </>

    )

}

export const CenterForm = (props) => {

    const itemCss = {
        textAlign: "center",
        marginBottom: "20px",
    }

    const formCss = {
        borderRadius: "40px",
    }
    
    return (

        <>
        
            <Wall>
                <Item css={itemCss}>
                    <H1 text={props.title}/>
                    <H2 text={props.subtitle}/>
                    <Parag text={props.description}/>
                    <Button text={props.button}/>
                </Item>
                <Item>
                    <Form
                        css={formCss}
                        name={props.name}
                        email={props.email}
                        phone={props.phone}
                        button={props.button}
                    />
                </Item>
            </Wall>
        
        </>

    )

}

export const CenterImage = (props) => {

    let imgPath = props.centerImagPath;
    let imgAlt = props.centerImagAlt;

    const centerImageCss = {
        width: "100%",
        height: "100%",
        marginTop: "20px"
    }
    
    return (

        <>
        
            <Wall style={Style.centerImage}>
                <Item>
                    <H1 text={props.title}/>
                    <H2 text={props.subtitle}/>
                    <Parag text={props.description}/>
                    <Button text={props.button}/>
                </Item>
                <Item>
                    <Image
                        alt={`esta imagem é sobre ${imgAlt}`}
                        src={imgPath}
                        style={centerImageCss}
                    />
                </Item>
            </Wall>
        
        </>

    )

}

export default Hero;