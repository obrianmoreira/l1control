import Style from './Layout.module.css';

export const Wall = ({children, style}) => {

    return (

        <>
            <div id={style} className={Style.wall}>
                {children}
            </div>
        </>

    )

}

export const Frame = ({children, style}) => {

    return (

        <>
            <div id={style} className={Style.frame}>
                {children}
            </div>
        </>

    )

}

export const Item = ({children, style}) => {

    return (

        <>
        
            <div id={style} className={Style.item}>
                {children}
            </div>
        
        </>

    )

}

export const Card = ({children, style}) => {

    return (

        <>

            <div id={style} className={Style.card}>
                {children}
            </div>

        </> 

    )

}