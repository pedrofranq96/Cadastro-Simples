import { useState } from "react";
import Cliente from "../core/Cliente";
import Input from "./Input";
import Botao from "./Botao";

interface ForumlarioProps{
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: ForumlarioProps){
    const id = props.cliente?.id

    const [nome,setNome] = useState(props.cliente?.nome ?? '')
    const [idade,setIdade] = useState(props.cliente?.idade ?? 0)
    const [telefone,setTelefone] = useState(props.cliente?.telefone ?? '')
    const [email,setEmail] = useState(props.cliente?.email ?? '')

    return (
        <div>
            {id ? (
                
                <Input somenteLeitura texto="Id" valor={id} className="mb-4"/>
            ): false}

            <Input texto="Nome:" valor={nome} valorMudou={setNome} className="mb-4"/>
            <Input texto="Idade:" tipo="number" valor={idade} valorMudou={setIdade} className="mb-4"/>
            <Input texto="Telefone:" valor={telefone} valorMudou={setTelefone} className="mb-4"/>
            <Input texto="Email:" tipo="email" valor={email} valorMudou={setEmail} className="mb-4"/>

            <div className="flex justify-end mt-7">
                <Botao cor="blue" className="mr-2" onClick={() =>props.clienteMudou?.(new Cliente(nome, +idade, telefone, email, id))}>
                   {id ? 'Alterar' : 'Salvar'}
                </Botao>

                <Botao cor="red" onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}