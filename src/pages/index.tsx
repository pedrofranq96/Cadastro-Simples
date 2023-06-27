import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const [cliente,setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  
  const clientes = [
    new Cliente('Ana', 20,'219888-7777', 'ana@email.com','1'),
    new Cliente('Ana2', 21,'219888-8888', 'ana@2email.com','2'),
    new Cliente('Ana3', 22,'219888-9999', 'ana@3email.com','3'),
    new Cliente('Ana4', 23,'219888-1111', 'ana@4email.com','4'),
    new Cliente('Ana5', 24,'219888-2222', 'ana@5email.com','5'),
  ]

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido(cliente: Cliente){
    console.log(`excluindo ...${cliente.nome}`)
  }

  function salvarCliente(cliente:Cliente){
    console.log(cliente)
    setVisivel('tabela')
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel('form')
  }


  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
      {visivel === 'tabela' ? (

        <> 
          <div className="flex justify-end">
            <Botao cor="green" className="mb-4" onClick={novoCliente}>Novo Cliente</Botao>
          </div>
          <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
        </>

      ) : (
        <Formulario clienteMudou={salvarCliente} cliente={cliente} cancelado={() =>setVisivel('tabela')}/>
      )}
      </Layout>
    </div>
  )
}
