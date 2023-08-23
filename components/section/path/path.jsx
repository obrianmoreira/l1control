'use client'
import { H1, H2, H3, Parag } from "@/components/elements/text/text";
import { Frame, Item, Wall } from "@/components/layout/layout";
import Image from "next/image";
import imgSrc from '../../section/path/images/talking.jpg'
import imgSrcTwo from '../../section/path/images/studyathome.jpg'
import imgSrcThree from '../../section/path/images/background2.jpg'
import Style from '../path/Path.module.css';
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
                imgCssWidth="100%"
                imgCssHeight="100%"
            /> 
            <GalleryPath
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
            />
        
        </>
    )
}

export const TimelinePath = (props) => {

    let imgAlt = props.imagAlt;    
    let imgCssWidth = props.imgCssWidth;
    let imgCssHeight = props.imgCssHeight;


    const imgCss = {
        width: `${imgCssWidth}`,
        height: `${imgCssHeight}`,
    }


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
                            style={imgCss}
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
                            style={imgCss}
                        />
                    </Item>
                </Frame>
                <Frame style={Style.frame}>
                    <Item>
                        <Image
                            alt={`esta imagem é sobre ${imgAlt}`}
                            src={imgSrc}
                            style={imgCss}
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

const GalleryPath = (props) => {

    let imgAlt = props.imagAlt;
    let imgCssWidth = props.imgCssWidth;
    let imgCssHeight = props.imgCssHeight;

    const imgCss = {
        width: `${imgCssWidth}`,
        height: `${imgCssHeight}`,
    }

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
                            style={imgCss}
                        />
                        <H3 text={props.subtitle}/>
                        <Parag text={props.description}/>
                    </Item>
                    <Item>
                        <Image
                            alt={`esta imagem é sobre ${imgAlt}`}
                            src={imgSrc}
                            style={imgCss}
                        />
                        <H3 text={props.subtitle}/>
                        <Parag text={props.description}/>
                    </Item>
                    <Item>
                        <Image
                            alt={`esta imagem é sobre ${imgAlt}`}
                            src={imgSrc}
                            style={imgCss}
                        />
                        <H3 text={props.subtitle}/>
                        <Parag text={props.description}/>
                    </Item>
                </Frame>
            </Wall>

        </>

    )

};

// All the elments that I have to reuse in every component I am going to let inside the main component

const IlustrationBookPath = (props) => {

    const [firstPath, setFirstPath] = useState(true);
    const [secondPath, setSecondPath] = useState(false);
    const [thirdPath, setThirdPath] = useState(false);

    let imgAlt = props.imagAlt;
    let imgCssWidth = props.imgCssWidth;
    let imgCssHeight = props.imgCssHeight;

    const imgCss = {
        width: `${imgCssWidth}`,
        height: `${imgCssHeight}`,
        borderRadius: "15px",
    }

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

                <Wall>
                    <Frame>
                        <Item>
                            <H2 text={props.subtitle}/>
                            <H3 text={props.subtitle}/>
                            <Parag text={props.description}/>
                        </Item>
                        <Item>
                            <Image
                                alt={`esta imagem é sobre ${imgAlt}`}
                                src={imgSrc}
                                style={imgCss}
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
                    <Frame>
                        <Item>
                            <H2 text={props.subtitleTwo}/>
                            <H3 text={props.subtitleTwo}/>
                            <Parag text={props.description}/>
                        </Item>
                        <Item>
                            <Image
                                alt={`esta imagem é sobre ${imgAlt}`}
                                src={imgSrcTwo}
                                style={imgCss}
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

                <Wall>
                    <Frame>
                        <Item>
                            <H2 text={props.subtitleThree}/>
                            <H3 text={props.subtitleThree}/>
                            <Parag text={props.description}/>
                        </Item>
                        <Item>
                            <Image
                                alt={`esta imagem é sobre ${imgAlt}`}
                                src={imgSrcThree}
                                style={imgCss}
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