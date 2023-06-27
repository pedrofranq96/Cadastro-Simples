import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 20,'219888-7777', 'ana@email.com','1'),
    new Cliente('Ana2', 21,'219888-8888', 'ana@2email.com','2'),
    new Cliente('Ana3', 22,'219888-9999', 'ana@3email.com','3'),
    new Cliente('Ana4', 23,'219888-1111', 'ana@4email.com','4'),
    new Cliente('Ana5', 24,'219888-2222', 'ana@5email.com','5'),
  ]


  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  )
}
