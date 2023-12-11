import { Item } from '@/components/layout/layout';
import Style from './Field.module.css';

const Field = (props, labelId) => {

    return (

        <>
        
            <Item>
                <label htmlFor="htmlFor" id={props.labelId} style={props.labelStyle} className={Style.label}>{props.label}</label>
                <input type={props.type} id={props.inputId} className={Style.input} placeholder={props.placeholder} onChange={props.onChange} onClick={props.onClick}/>
            </Item>


        </>

    )

}

export default Field;