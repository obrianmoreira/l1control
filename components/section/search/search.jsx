'use client'
import { Button } from "@/components/elements/button/button";
import Field from "@/components/elements/form/field/field";
import { Frame } from "@/components/layout/layout";
import Style from './Search.module.css';
import { useState } from "react";
import CreateService from "../crud/create/create";

const SearchBar = (props) => {

    const [addBar, setAddBar] = useState(false);

    const handleClick = () => {

        setAddBar(!addBar)

    }

    return (

        <>

            <Frame Frame={Style.frame}>
              <Field labelId="search" inputId="search" placeholder="Escreva o que procura" onChange={props.onChange}/>
              <Button buttonText="Pesquisar"/>
              <Button buttonText="Adicionar" buttonClick={handleClick}/>
            </Frame>
            {addBar ?
                (<>
                
                    <CreateService />
                    
                </>) 
                
                :
                
                (<></>)}
        </> 

    )
}

export default SearchBar;