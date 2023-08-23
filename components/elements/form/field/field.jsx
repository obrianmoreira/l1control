import Style from './Field.module.css';

const Field = (props, label, input, field) => {

    return (

        <>
        
            <div id={field} className={Style.field}>
                <label htmlFor={props.htmlFor} id={label} className={Style.label}>{props.label}</label>
                <input type={props.type} id={input} className={Style.input} placeholder={props.placeholder}/>
            </div>

        </>

    )

}

export default Field;