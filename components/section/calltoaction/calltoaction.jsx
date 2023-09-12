import { Wall, Item, Frame, Card } from "@/components/layout/layout"
import { H2, H3, Parag } from "@/components/elements/text/text"
import Form from "@/components/elements/form/form"
import Style from './Calltoaction.module.css'
import Field from "@/components/elements/form/field/field"
import { Button } from "@/components/elements/button/button"
import Footer from "@/components/elements/footer/footer"

const CallToAction = (props) => {

    return (

        <>
        
            <Wall style={Style.wall}>
                <Item style={Style.textItem}>
                    <H2 text={props.title}/>
                    <H3 text={props.subtitle}/>
                    <Parag text={props.description}/>
                    <Button text="Schedule Your Free Consultancy"/>
                </Item>
            </Wall>

        </>


    )

}

export default CallToAction;