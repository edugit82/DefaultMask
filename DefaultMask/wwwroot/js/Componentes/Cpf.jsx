import { TextBox } from "/js/Genericos/TextBox.jsx"
import { CPFMask } from "/js/Funcoes/CPFMask.js"

export class Cpf extends TextBox {

    constructor() {
        super()

        let _this = this;

        $(document).ready(() => {
            let input = $("#" + _this.props._id)[0];
            $(input).prop("placeholder", "CPF");

            $(input).css("width", "110px");
            $(input).prop("maxlength", "14");

            $(input).on("keyup", CPFMask);
        });
    }
}