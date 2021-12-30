import { TextBox } from "/js/Genericos/TextBox.jsx"
import { CepMask } from "/js/Funcoes/CepMask.js"

export class Cep extends TextBox {

    constructor() {
        super()

        let _this = this;

        $(document).ready(() => {
            let input = $("#" + _this.props._id)[0];
            $(input).prop("placeholder", "CEP");

            $(input).css("width", "90px");
            $(input).prop("maxlength", "9");

            $(input).on("keyup", CepMask);
        });
    }
}