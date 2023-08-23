import { Button } from "../../elements/button/button";
import { H3, Parag } from "../../elements/text/text";
import { Card, Frame, Item } from "../../layout/layout";;
import Style from './Form.module.css';
import Field from "./field/field";

const Form = (props) => {

    return (

        <>

            <Card style={Style.card} css={props.css}>
                <H3 text={props.title}/>
                <Parag text={props.description} />
                <Frame style={Style.frame}>
                    <Field label={props.name}/>
                    <Field label={props.email}/>
                    <Field label={props.phone}/>
                    <Button text={props.button} style={Style.button}/>
                </Frame>
            </Card>

        </>

    )

}

export default Form;