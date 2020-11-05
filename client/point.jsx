import React from 'react';

class Point extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            toggle:true
        }
    }

    handleClick (){
        this.setState({ toggle : !this.state.toggle})
        console.log(this.state.toggle)
    }


    render(){
        return(
            <div className={this.state.toggle ? 'one' : 'two'}  onClick={this.handleClick.bind(this)}></div>
        )
    }
}


export default Point