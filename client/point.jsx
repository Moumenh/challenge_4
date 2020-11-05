import React from 'react';

class Point extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            toggle:true,
            currentPlayer : 1,
            color:'red'
        }
    }

    handleClick (event){
        if(event.target.classList.contains('taken')){
            if(this.state.currentPlayer === 1){
                event.target.classList.add('taken')
                event.target.classList.add('one')
                this.setState({ currentPlayer : 2})
                 
            }else{
                event.target.classList.add('taken')
                event.target.classList.add('two')
                this.setState({ currentPlayer : 1})
            }
        }
    }

    draw(i) {
        let btn = document.getElementById(`${i}`)
            if(this.state.color === "red"){
                btn.classList.add("one")
                this.setState({color:"blue"})
            }else{
                btn.classList.add("two")
                this.setState({color:"red"})
            }
            // this.win(i)
    }


    render(){
        return(
            <div className='' id={this.props.id}  onClick={this.props.onClick}></div>
        )
    }
}


export default Point