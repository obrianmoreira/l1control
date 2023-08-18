import Style from './Button.module.css';

export const Button = (props) => {

    return (

        <>
        
            <button id={props.style} className={Style.button} onClick={props.buttonClick}>
                {props.text}
            </button>
        
        </>

    )

}