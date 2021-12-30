export class TextBox extends React.Component {

    constructor() {
        super()

        let _this = this;

        $(document).ready(() => {
            let input = $("#" + _this.props._id)[0];
            $(input).css("background-color", "#F0FFFF");
            $(input).css("font-size", "12px");            
        });
    }

    render() {
        return (<input id={this.props._id} type="text" className="form-control" />);
    }
}