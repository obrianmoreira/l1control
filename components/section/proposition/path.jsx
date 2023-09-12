'use client'
import { H2, H3, H4, Parag } from "@/components/elements/text/text";
import { Frame, Item, Wall } from "@/components/layout/layout";
import Image from "next/image";
import Style from './Preposition.module.css';
import { Button } from "@/components/elements/button/button";
import { useState } from "react";

const Path = () => {

    return (
        <>
        
            <TimelinePath
                title="Call to Action"
                subtitle="Subcall to action"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni perspiciatis fuga quos libero, facilis ad? Id aliquid iste deserunt expedita architecto?" 
                imagAlt="nothing"
            /> 
            {/*<GalleryPath
                title="Call to Action"
                subtitle="Subcall to action"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni perspiciatis fuga quos libero, facilis ad? Id aliquid iste deserunt expedita architecto?" 
                imagAlt="nothing"
                imgCssWidth="100%"
                imgCssHeight="100%"
            />

            <IlustrationBookPath
                subtitle="Subcall to action"
                subtitleTwo="Second SubCall to action"
                subtitleThree="Third Subcall to action"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in nulla luctus, malesuada ligula eu, sagittis sapien. Nunc egestas tortor eu ligula auctor, rutrum tincidunt magna condimentum. Integer ut sapien accumsan justo commodo pulvinar eget in diam. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                imagAlt="nothing"
                imgCssWidth="100%"
                imgCssHeight="100%"
            />*/}
        
        </>
    )
}

export const TimelinePath = (props) => {

    let imgAlt = props.imagAlt;    

    return (

        <>
        
            <Wall>
                <Item>
                    <H2 text={props.title}/>
                    <H3 text={props.subtitle}/>
                    <Parag text={props.description}/>
                </Item>
                <Frame style={Style.frame}>
                    <Item>
                        <Image
                            alt={`esta imagem é sobre ${imgAlt}`}
                            src={imgSrc}
                            className={Style.img}
                        />
                    </Item>
                    <Item>
                        <H3 text={props.subtitle}/>
                        <Parag text={props.description}/>
                    </Item>
                </Frame>
                <Frame style={Style.frame}>
                    <Item>
                        <H3 text={props.subtitle}/>
                        <Parag text={props.description}/>
                    </Item>
                    <Item>
                        <Image
                            alt={`esta imagem é sobre ${imgAlt}`}
                            src={imgSrc}
                            className={Style.img}
                        />
                    </Item>
                </Frame>
                <Frame style={Style.frame}>
                    <Item>
                        <Image
                            alt={`esta imagem é sobre ${imgAlt}`}
                            src={imgSrc}
                            className={Style.img}
                        />
                    </Item>
                    <Item>
                        <H3 text={props.subtitle}/>
                        <Parag text={props.description}/>
                    </Item>
                </Frame>
            </Wall>
        
        </>

    )
};

export const GalleryPath = (props) => {

    return (

        <>
        
            <Wall>
                <Item>
                    <H2 text={props.title}/>
                    <H3 text={props.subtitle}/>
                    <Parag text={props.description}/>
                </Item>
                <Frame style={Style.frame}>
                    <Item>
                        <Image
                            alt="image"
                            src={props.firstImgSrc}
                            className={Style.img}
                        />
                        <H4 text={props.firstStepTitle}/>
                        <Parag text={props.firstStepDescription}/>
                    </Item>
                    <Item>
                        <Image
                            alt="image"
                            src={props.secondImgSrc}
                            className={Style.img}
                        />
                        <H4 text={props.secondStepTitle}/>
                        <Parag text={props.secondStepDescription}/>
                    </Item>
                    <Item>
                        <Image
                            alt="image"
                            src={props.thirdImgSrc}
                            className={Style.img}
                        />
                        <H4 text={props.thirdStepTitle}/>
                        <Parag text={props.thirdStepDescription}/>
                    </Item>
                </Frame>
            </Wall>

        </>

    )

};

// All the elments that I have to reuse in every component I am going to let inside the main component

export const IlustrationBookPath = (props) => {

    const [firstPath, setFirstPath] = useState(true);
    const [secondPath, setSecondPath] = useState(false);
    const [thirdPath, setThirdPath] = useState(false);

    const handleBtnOne = () => {
        setFirstPath(true);
        setSecondPath(false);
        setThirdPath(false);
    }

    const handleBtnTwo = () => {
        setFirstPath(false);
        setSecondPath(true);
        setThirdPath(false);
    }

    const handleBtnThree = () => {
        setFirstPath(false);
        setSecondPath(false);
        setThirdPath(true);
    }

    return (
        <>
        
            { firstPath ? 

                <Wall style={Style.illustrationBookPath}>
                    <Frame style={Style.frame}>
                        <Item>
                            <H2 text={props.title}/>
                            <H3 text={props.subtitle}/>
                            <Parag text={props.description}/>
                        </Item>
                        <Item>
                            <Image
                                alt="Image"
                                src={props.firstImgSrc}
                                className={Style.img}
                            />
                            <Frame style={Style.innerPathFrame}>
                                <Button text="1" buttonClick={handleBtnOne}/>
                                <Button text="2" buttonClick={handleBtnTwo}/>
                                <Button text="3" buttonClick={handleBtnThree}/>
                            </Frame>
                        </Item>
                    </Frame>
                </Wall>
            : 
                (
                    
                    <></>

                )
            
            }

            { secondPath ? 

                <Wall>
                    <Frame style={Style.frame}>
                        <Item>
                            <H2 text={props.titleTwo}/>
                            <H3 text={props.subtitleTwo}/>
                            <Parag text={props.descriptionTwo}/>
                        </Item>
                        <Item>
                            <Image
                                alt="Image"
                                src={props.firstImgSrc}
                                className={Style.img}
                            />
                            <Frame style={Style.innerPathFrame}>
                                <Button text="1" buttonClick={handleBtnOne}/>
                                <Button text="2" buttonClick={handleBtnTwo}/>
                                <Button text="3" buttonClick={handleBtnThree}/>
                            </Frame>
                        </Item>
                    </Frame>
                </Wall>
            : 
                (
                    
                    <></>

                )
            
            }

            { thirdPath ? 

                <Wall style={Style.wall}>
                    <Frame style={Style.frame}>
                        <Item>
                            <H2 text={props.titleThree}/>
                            <H3 text={props.subtitleThree}/>
                            <Parag text={props.descriptionThree}/>
                        </Item>
                        <Item>
                            <Image
                                alt="Image"
                                src={props.firstImgSrc}
                                className={Style.img}
                            />
                            <Frame style={Style.innerPathFrame}>
                                <Button text="1" buttonClick={handleBtnOne}/>
                                <Button text="2" buttonClick={handleBtnTwo}/>
                                <Button text="3" buttonClick={handleBtnThree}/>
                            </Frame>
                        </Item>
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

export default Path;