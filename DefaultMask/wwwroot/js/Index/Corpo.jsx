import { Rg } from "/js/Componentes/Rg.jsx"
import { Cpf } from "/js/Componentes/Cpf.jsx"
import { Cnpj } from "/js/Componentes/Cnpj.jsx"
import { Cep } from "/js/Componentes/Cep.jsx"
import { Telefone } from "/js/Componentes/Telefone.jsx"

export class Corpo extends React.Component {

    constructor() {
        super()

        let _this = this;

        $(document).ready(() => {
            let corpo = "#corpo > div.row";
            $(corpo).css("margin-bottom", "15px");
            $(corpo).css("margin-left", "15px");
        });
    }

    render()
    {
        return (<>
            <div className="row align-items-center justify-content-start">
                <Rg _id="rg" />
            </div>
            <div className="row align-items-center justify-content-start">
                <Cpf _id="cpf" />
            </div>
            <div className="row align-items-center justify-content-start">
                <Cnpj _id="cnpj" />
            </div>
            <div className="row align-items-center justify-content-start">
                <Cep _id="cep" />
            </div>
            <div className="row align-items-center justify-content-start">
                <Telefone _id="telefone" />
            </div>
        </>)
    }
}

let Executa = function (box) {
    ReactDOM.render(<Corpo />, box)
}

export { Executa }