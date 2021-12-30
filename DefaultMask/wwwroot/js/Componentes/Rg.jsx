import { TextBox } from "/js/Genericos/TextBox.jsx"
import { RGMask } from "/js/Funcoes/RGMask.js"

export class Rg extends TextBox {

    constructor() {
        super()

        let _this = this;

        $(document).ready(() => {            
            let input = $("#" + _this.props._id)[0];
            $(input).prop("placeholder", "RG");

            $(input).css("width", "100px");
            $(input).prop("maxlength", "13");

            $(input).on("keyup", RGMask);
        });
    }    
}