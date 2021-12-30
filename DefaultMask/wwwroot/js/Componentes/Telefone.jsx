import { TextBox } from "/js/Genericos/TextBox.jsx"
import { TelefoneMask } from "/js/Funcoes/TelefoneMask.js"

export class Telefone extends TextBox {

    constructor() {
        super()

        let _this = this;

        $(document).ready(() => {
            let input = $("#" + _this.props._id)[0];
            $(input).prop("placeholder", "Telefone");

            $(input).css("width", "120px");
            $(input).prop("maxlength", "15");

            $(input).on("keyup", TelefoneMask);
        });
    }
}