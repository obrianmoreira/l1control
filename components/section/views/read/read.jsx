'use client'
import { Frame } from "@/components/layout/layout";
import CreateService from "@/components/section/views/create/create";
import { useCallback, useEffect, useState } from "react";
import Style from './Read.module.css';
import Table from "@/components/elements/table/table";
import { Button } from "@/components/elements/button/button";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { MdRadioButtonChecked } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { useSelector } from "react-redux";

const ReadService = () => {

    const [tasks, setTasks] = useState([]);
    const [openFilter, setOpenFiler] = useState(false);
    const [selection, setSelection] = useState([]);
    const [checked, setChecked] = useState([]);
    const [returnChecked, setReturnChecked] = useState(true);
    const [searchQuery, setSearchQuery] = useState([]);
    const visibility = useSelector(state => state.reducer.visibility);

    const getTasks = useCallback(async () => {
        try {
            const res = await fetch('http://localhost:3000/api/tasks', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = await res.json();
            setTasks(result);
            //getTasks();
            const taskId = tasks.map(task => task.id);
            setSelection(taskId);
            } catch (error) {
                console.log(error)
            }
        },[tasks]  
    ) 

    const getSearchInput = useCallback(async () => {
        try {
            const res = await fetch('http://localhost:3000/api/searches', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json();
            setSearchQuery(data);
            getSearchInput();
        } catch (error) {
            console.log(error);
        }
    }, []);
        
    useEffect(() => {
        getTasks();
        getSearchInput();
    }, [getTasks, getSearchInput]);

    const handleSelection = (taskId) => {
        setChecked((prevChecked) => {
            if(prevChecked.includes(taskId)) {
                return prevChecked.filter((id) => id !== taskId);
            } else {
                return [...prevChecked, taskId];
            }
        });
    }

    async function handleSelectAll (taskId) {
        setReturnChecked(!returnChecked);
        if(returnChecked === true) {
            setChecked(taskId)
        } else {
            setChecked([]);
        }
    }
    

    async function handleDelete(taskId) {
        try {
            const res = await fetch('http://localhost:3000/api/tasks', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    taskId,
                })
            })
            const data = await res.json();
            console.log(`${data}`)
        } catch(error) {
            console.log(error)
        }
    }

    return (
        
        <table id={Style.table}>
            <thead>
                <tr>  
                    <th className={Style.collum}><p>Pedido</p></th>
                    <th className={Style.collum}><p>Solicitador</p></th>
                    <th className={Style.collum}><p>Data</p></th>
                    <th className={Style.collum}><p>Hora</p></th>
                    <th className={Style.collum}><p>Status</p></th>
                    <th className={Style.collum}><p>Executador</p></th>
                    <th id={Style.iconCollum}><HiOutlineAdjustmentsHorizontal size={30} onClick={(e) => setOpenFiler(!openFilter)}/></th>     
                </tr>
            </thead>
                <tbody>
                {openFilter ? (<>
                    <tr>
                        <th><button id={Style.deleteButton} onClick={() => handleDelete(checked)}>Deletar</button></th>      
                        <th><button id={Style.deleteButton} onClick={() => handleSelectAll(selection)}>Select All</button></th>      
                    </tr>
                    {searchQuery.map((query) => {
                    return (
                        <> 
                                <tr key={query.id} id={Style.cellId}>
                                    <Table cell={query.searchInput}/>
                                    {openFilter
                                        ? (<><td onClick={() => handleSelection(query.id)}>{checked.includes(query.id) ? (<>{<MdRadioButtonChecked className={Style.iconItem}/>}</>)  : (<><MdRadioButtonUnchecked className={Style.iconItem}/></>)}</td></>):(<></>)
                                    }
                                </tr>
                                
                        </>
                    )
                })}
                </>) : (<></>)}
                {visibility ? (<>
                    
                </>) : (<>{tasks.map((task) => {
                        return (
                            <> 
                                    <tr key={task.id} id={Style.cellId}>
                                        <Table cell={task.taskResquest}/>
                                        <Table cell={task.taskResquester}/>
                                        <Table cell={task.taskDate}/>
                                        <Table cell={task.taskTime}/>
                                        <Table cell={task.taskExecutor}/>
                                        <Table cell={task.taskStatus}/>
                                        {openFilter
                                            ? (<><td onClick={() => handleSelection(task.id)}>{checked.includes(task.id) ? (<>{<MdRadioButtonChecked className={Style.iconItem}/>}</>)  : (<><MdRadioButtonUnchecked className={Style.iconItem}/></>)}</td></>):(<></>)
                                        }
                                    </tr>
                                    
                            </>
                        )
                    })}</>)}
            </tbody>

        </table>
    )
}

/*
                                    */

export default ReadService;