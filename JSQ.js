function Show(props) {
    return (
        <h1>{props.show}</h1>
    )
}
class Borad extends React.Component {
    constructor(props) {
        super(props);
        this.handelClick = this.handelClick.bind(this);
        this.signClick=this.signClick.bind(this);
        this.comPute=this.comPute.bind(this);
        this.cleAr=this.cleAr.bind(this);
        this.BackSpace=this.BackSpace.bind(this)
        this.state = { value: '0', sign:'', numone:'', numtwo:'',output:''}
    }
    handelClick(e) {
        if (this.state.value == '0') {
            this.setState({ value: e.target.value })
        }
        else
            this.setState({ value: this.state.value + e.target.value });
    }
    signClick(e) {
        this.setState({ sign: e.target.value })
        this.state.numone = this.state.value;
        this.state.value = '0';
    }
    comPute() {
        this.state.numtwo=this.state.value;
        switch (this.state.sign) {
            case 'add':
                this.state.output=parseFloat(this.state.numone)+parseFloat(this.state.numtwo);
                // this.state.value=this.state.output;
                break;
            case 'subtract':
                this.state.output=this.state.numone-this.state.numtwo;
                break;
            case 'multiply':
                this.state.output=this.state.numone*this.state.numtwo;
                break;
            case 'divide':
                this.state.output=this.state.numone/this.state.numtwo;
                break; 
            case 'pow':
                this.state.output=Math.pow(this.state.numone,this.state.numtwo);
            default:
                break;
        }
        this.setState({value:this.state.output})
    }
    cleAr() {
    this.setState({value: '0', sign:'', numone:'', numtwo:'',output:''});
    }
    BackSpace(){
        if(this.state.value.length>1)
        this.setState({value:this.state.value.slice(0,-1)})
        else
        this.setState({value:'0'})
    }
    render() {
        return (
            <div className="board">
                <Show show={this.state.value} />
                <div className="numboard">
                    <div className="line1">
                        <button value="7" onClick={this.handelClick}>7</button>
                        <button value="8" onClick={this.handelClick}>8</button>
                        <button value="9" onClick={this.handelClick}>9</button>
                    </div>
                    <div className="line2">
                        <button value="4" onClick={this.handelClick}>4</button>
                        <button value="5" onClick={this.handelClick}>5</button>
                        <button value="6" onClick={this.handelClick}>6</button>
                    </div>
                    <div className="line3">
                        <button value="1" onClick={this.handelClick}>1</button>
                        <button value="2" onClick={this.handelClick}>2</button>
                        <button value="3" onClick={this.handelClick}>3</button>
                    </div>
                    <div className="line4">
                        <button value="pow" onClick={this.signClick}>POW</button>
                        <button value="0" onClick={this.handelClick}>0</button>
                    </div>
                </div>
                <div className="signboard">
                    <div className="sign1">
                        <button value='add' onClick={this.signClick}>+</button>
                        <button value='subtract' onClick={this.signClick}>-</button>
                    </div>
                    <div className="sign2">
                        <button value='multiply' onClick={this.signClick}>*</button>
                        <button value="divide" onClick={this.signClick}>/</button>
                    </div>
                    <div className="sign3">
                        <button onClick={this.comPute}>=</button>
                        <button onClick={this.cleAr}>C</button>
                    </div>
                    <div className="sign4">
                        <button onClick={this.BackSpace}>Backspace</button>
                    </div>
                </div>

            </div>
        )
    }
}
ReactDOM.render(
    <Borad></Borad>,
    document.getElementById('root')
)