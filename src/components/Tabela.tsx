import Cliente from "../core/Cliente"

interface TabelaProps{
    clientes : Cliente[]
}

export default function Tabela(props: TabelaProps){

    function renderizarCabecalho(){
        return(
            <tr>
                {/* <th>Código</th> */}
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                <th className="text-left p-4">Telefone</th>
                <th className="text-left p-4">Email</th>
            </tr>
        )
    }

    function renderizarDados(){
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    {/* <td>{cliente.id}</td> */}
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    <td className="text-left p-4">{cliente.telefone}</td>
                    <td className="text-left p-4">{cliente.email}</td>
                </tr>
            )
        })
    }
    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-200
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}