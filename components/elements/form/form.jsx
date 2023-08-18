import { Button } from "../../elements/button/button";
import { Field, Input } from "../../elements/form/field";
import { H3 } from "../../elements/text/text";
import { Card, Frame, Item } from "../../layout/layout";;
import Style from './Form.module.css';

const Form = (props) => {

    return (

        <>

            <Card style={Style.card}>
                <Frame style={Style.frame}>
                    <Field placeholder={props.name}/>
                    <Field placeholder={props.email}/>
                    <Field placeholder={props.phone}/>
                    <Button text={props.button} style={Style.button}/>
                </Frame>
            </Card>

        </>

    )

}

export default Form;