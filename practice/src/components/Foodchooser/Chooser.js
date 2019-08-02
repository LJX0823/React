import React from 'react'
import './Chooser.css'
class Chooser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            result: '',
            flag: false,
            isbtn:true
        }
    }
    componentDidMount() {
        const typearr = ['水果', '方便面', '炒饭', '饺子', '抄手', '面', '盖饭','做饭']
        this.timer = setInterval(() => {
            this.setState({
                type: typearr[Math.floor(Math.random() * typearr.length)]
            })
        }, 1);

    }

    stopType() {
        clearInterval(this.timer);
        this.setState({
            flag: true
        })
        switch (this.state.type) {
            case '水果':
                const fruit=['苹果','香蕉','火龙果','小番茄']
                this.timer=setInterval(() => {
                    this.setState({
                        result: fruit[Math.floor(Math.random() * fruit.length)]
                    })
                }, 1);
                break;
            case '方便面':
                const easynoodle=['红烧牛肉面','泡椒牛肉面','麻辣牛肉面','藤椒牛肉面','海鲜面','香菇面','老坛酸菜面']
                this.timer=setInterval(() => {
                    this.setState({
                        result: easynoodle[Math.floor(Math.random() * easynoodle.length)]
                    })
                }, 1);
                break;
            case '炒饭': 
                const hotrace=['扬州','鸡米芽菜','青椒肉丝','咖喱鸡','鱼香肉丝','番茄蛋']
                this.timer=setInterval(() => {
                    this.setState({
                        result: hotrace[Math.floor(Math.random() * hotrace.length)]+'炒饭'
                    })
                }, 1);
                break;
            case '饺子':
                const dumpling=['韭菜','白菜']
                this.timer=setInterval(() => {
                    this.setState({
                        result: dumpling[Math.floor(Math.random() * dumpling.length)]+'饺子'
                    })
                }, 1);
                break;
            case '抄手':
                const wonton=['红油','老麻','海味','干拌','藤椒','清汤'];
                this.timer=setInterval(() => {
                    this.setState({
                        result: wonton[Math.floor(Math.random() * wonton.length)]+'抄手'
                    })
                }, 1);
                break;
            case '面':
                const noodle=['杂酱','干拌','清汤','宜宾燃','牛肉'];
                this.timer=setInterval(() => {
                    this.setState({
                        result: noodle[Math.floor(Math.random() * noodle.length)]+'面'
                    })
                }, 1);  
                break;
            case '盖饭':
                const coverrace=['青椒肉丝','番茄蛋','鱼香肉丝','甜椒肉丝']
                this.timer=setInterval(() => {
                    this.setState({
                        result: coverrace[Math.floor(Math.random() * coverrace.length)]+'盖饭'
                    })
                }, 1);  
                break;             
            default:
                this.setState({
                    result:'加油好好做饭',
                    isbtn:false
                })
                break;
        }
    }
    stopResult(){
        clearInterval(this.timer);
    }
    render() {
        return (
            <div className='chooser_body'>
                <h1>{this.state.type}</h1>
                <button onClick={this.stopType.bind(this)}>Stop</button>
                <div className={this.state.flag ? '' : 'hide'}>
                    <h1>{this.state.result}</h1>
                    <button onClick={this.stopResult.bind(this)} className={this.state.isbtn ? '' : 'hide'}>Stop</button>
                </div>

            </div>
        )
    }
}
export default Chooser