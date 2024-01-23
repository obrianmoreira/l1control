'use client'
import Field from "@/components/elements/form/field/field";
import { Frame, Item } from "@/components/layout/layout";
import Style from './Create.module.css';
import { Button } from "@/components/elements/button/button";
import { db } from "@vercel/postgres";
import { useState } from "react";

const CreateService = () => {

    const [taskRequest, setTaskRequest] = useState('');
    const [taskRequester, setTaskRequester] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskTime, setTaskTime] = useState('');
    const [taskStatus, setTaskStatus] = useState('');
    const [taskExecutor, setTaskExecutor] = useState('');

    async function postTasks() {
        try {
            const res = await fetch('http://localhost:3000/api/tasks',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    tasks: {
                        taskRequest,
                        taskRequester,
                        taskDate,
                        taskTime,
                        taskExecutor,
                        taskStatus,
                    }
                })
            });
            const tasks = await res.json();
            handleReset();
            console.log(`${tasks} correctly sent`);
        } catch (error) {
            console.log(error)
        }
    }

    const handleReset = () => {
        console.log('Reseting State');
        setTaskRequest('Qual o pedido');
        setTaskRequester('Quem solicita');
        setTaskDate('Qual a data');
        setTaskTime('Qual a hora');
        setTaskStatus('Qual o status');
        setTaskExecutor('Quem Executou');
    }

    return  (

        <>
        
            <Frame style={Style.frame}>
                <div className={Style.fields}>
                    <Field type="text" label="Pedido de Serviço" labelStyle={{marginTop: "40px", marginBottom: "10px"}} labelId="pedido" inputId="pedido" placeholder={taskRequest} onChange={(e) => setTaskRequest(e.target.value)} value={taskRequest}/>
                    <Field type="text" label="Quem Pediu" labelStyle={{marginTop: "40px", marginBottom: "10px"}} labelId="pedido" inputId="pedido" placeholder={taskRequester} onChange={(e) => setTaskRequester(e.target.value)} value={taskRequester}/>
                </div>
                <div className={Style.fields}>
                    <Field type="date" label="Data do Serviço" labelStyle={{marginTop: "40px", marginBottom: "10px"}} labelId="pedido" inputId="pedido" placeholder={taskDate} onChange={(e) => setTaskDate(e.target.value)} value={taskDate}/>
                    <Field type="time" label="Hora do Serviço" labelStyle={{marginTop: "40px", marginBottom: "10px"}} labelId="pedido" inputId="pedido" placeholder={taskTime} onChange={(e) => setTaskTime(e.target.value)} value={taskTime}/>
                </div>
                <div className={Style.field}>
                    <Field type="text" label="Status do Serviço" labelStyle={{marginTop: "40px", marginBottom: "10px"}} labelId="pedido" inputId="pedido" placeholder={taskStatus} onChange={(e) => setTaskStatus(e.target.value)} value={taskStatus}/>
                    <Field type="text" label="Quem Realizou" labelStyle={{marginTop: "40px", marginBottom: "10px"}} labelId="pedido" inputId="pedido" placeholder={taskExecutor} onChange={(e) => setTaskExecutor(e.target.value)} value={taskExecutor}/>
                    <Button buttonText="Adicionar" buttonClick={postTasks} style={Style.button}/>
                </div>
            </Frame>
        
        </>

    )
}

export default CreateService;

/**
 * 
 * setTaskArray(taskRequest, taskRequester, taskDate, taskTime, taskStatus, taskExecutor);
            if(!taskArray.empty){
                setDisabled(!disabled);
                const res = await fetch('http://localhost:3000/api/tasks',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        tasks: {
                            taskRequest,
                            taskRequester,
                            taskDate,
                            taskTime,
                            taskExecutor,
                            taskStatus,
                        }
                    })
                });
                const tasks = await res.json();
                handleReset();
                console.log(`${tasks} correctly sent`);
            } else {
                console.log('array empty')
            }
 * 
 * 
 */