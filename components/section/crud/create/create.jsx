import Field from "@/components/elements/form/field/field";
import { Frame, Item } from "@/components/layout/layout";
import Style from './Create.module.css';
import { Button } from "@/components/elements/button/button";

const CreateService = () => {
    return  (

        <>
        
            <Frame style={Style.frame}>
                <div className={Style.fields}>
                    <Field  label="Pedido de Serviço" labelStyle={{marginTop: "40px", marginBottom: "10px"}} labelId="pedido" inputId="pedido" placeholder="Qual o pedido de serviço" onChange={''}/>
                    <Field label="Quem Pediu" labelStyle={{marginTop: "40px", marginBottom: "10px"}} labelId="pedido" inputId="pedido" placeholder="Qual o pedido de serviço" onChange={''}/>
                </div>
                <div className={Style.fields}>
                    <Field label="Data do Serviço" labelStyle={{marginTop: "40px", marginBottom: "10px"}} labelId="pedido" inputId="pedido" placeholder="Qual o pedido de serviço" onChange={''}/>
                    <Field label="Hora do Serviço" labelStyle={{marginTop: "40px", marginBottom: "10px"}} labelId="pedido" inputId="pedido" placeholder="Qual o pedido de serviço" onChange={''}/>
                </div>
                <div className={Style.field}>
                    <Field label="Pedido de Serviço" labelStyle={{marginTop: "40px", marginBottom: "10px"}} labelId="pedido" inputId="pedido" placeholder="Qual o pedido de serviço" onChange={''}/>
                    <Field label="Quem Realizou" labelStyle={{marginTop: "40px", marginBottom: "10px"}} labelId="pedido" inputId="pedido" placeholder="Qual o pedido de serviço" onChange={''}/>
                    <Button buttonText="Adicionar" buttonClick={''} style={Style.button}/>
                </div>
            </Frame>
        
        </>

    )
}

export default CreateService;