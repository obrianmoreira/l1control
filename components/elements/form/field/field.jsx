import { Item } from '@/components/layout/layout';
import Style from './Field.module.css';

const Field = (props, labelId) => {

    return (

        <>
        
            <Item style={Style.field}>
                <label htmlFor={props.htmlFor} id={props.labelId} style={props.css} className={Style.label}>{props.label}</label>
                <input type={props.type} id={props.input} className={Style.input} placeholder={props.placeholder} onChange={props.onChange} onClick={props.onClick}/>
            </Item>


        </>

    )

}

export default Field;