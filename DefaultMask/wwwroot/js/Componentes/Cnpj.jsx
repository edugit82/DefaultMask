import { TextBox } from "/js/Genericos/TextBox.jsx"
import { CnpjMask } from "/js/Funcoes/CnpjMask.js"

export class Cnpj extends TextBox {

    constructor() {
        super()

        let _this = this;

        $(document).ready(() => {
            let input = $("#" + _this.props._id)[0];
            $(input).prop("placeholder", "CNPJ");

            $(input).css("width", "140px");
            $(input).prop("maxlength", "18");

            $(input).on("keyup", CnpjMask);
        });
    }
}