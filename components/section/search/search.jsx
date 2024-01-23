'use client'
import { Button } from "@/components/elements/button/button";
import Field from "@/components/elements/form/field/field";
import { Frame } from "@/components/layout/layout";
import Style from './Search.module.css';
import { useCallback, useEffect, useState } from "react";
import CreateService from "../views/create/create";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchInput, updateSearchVisibility } from "@/redux/action";

const SearchBar = () => {

    const [addBar, setAddBar] = useState(false);
    const [searchField, setSearchField] = useState('');
    const [visibilityState, setVisibilityState] = useState(false);
    const [searchQuery, setSearchQuery] = useState([]);

    const dispatch = useDispatch();

    async function postSearchState(){
        try {
            const res = await fetch('http://localhost:3000/api/searches', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    searchs: {
                        searchField,
                    }
                })
            })
            const data = await res.json();
            console.log(`${data} correctly sent`);
        } catch (error) {
            console.log(error);
        }
    }

    const getSearchInput = useCallback(async () => {
        try {
            const res = await fetch('http://localhost:3000/api/searches', {
                method: 'GET',
                headers: {
                    'Content-Type': 'applicaton/json'
                }
            })
            const data = await res.json();
            setSearchQuery(data);
            getSearchInput();
        } catch (error) {
            console.log(error);
        }
    }, []);
        

    const handleSearch = () => {
        postSearchState();
        getSearchInput();
        dispatch(updateSearchVisibility(!visibilityState));
    }

    return (

        <>
            <Frame Frame={Style.frame}>
              <Field labelId="search" inputId="search" placeholder="Escreva o que procura" onChange={(e) => setSearchField(e.target.value)}/>
              <Button buttonText="Pesquisar" buttonClick={handleSearch}/>
              <Button buttonText="Adicionar" buttonClick={(e) => setAddBar(!addBar)}/>
            </Frame>
            {searchQuery.map((query)=> {
                <li key={query.id}>{query.searchInput}</li>
            })}
            {addBar ? 
                (<> 
                    <CreateService/>
                    
                </>) 
                
                :
                
                (<></>)}
        </> 

    )
}

export default SearchBar;