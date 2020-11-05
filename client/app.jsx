import React from 'react';
import ReactDOM from 'react-dom';
import Point from './point.jsx'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            color:'red',
            loop : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42]
        }
    }

    handleClick (event){
        document.getElementById
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


    clicked(id){
        console.log(id)
        let iB=id+7
        while(iB<42){
            let btn = document.getElementById(`${iB}`)
            if((btn.classList.contains("one")) || (btn.classList.contains("two"))){
                this.draw(id)
                return
            }
            id+=7
            iB+=7
        }
        this.draw(id)
    }

    draw(id) {
        let btn = document.getElementById(`${id}`)
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
            <div className='grid'>
                {
                    this.state.loop.map(( el,id ) => {
                        // console.log(id)
                        return <Point id={id} key={id} onClick={() =>this.clicked(id)}/>
                    })
                }
            </div>
        )
    }
}





ReactDOM.render(<App />, document.getElementById('app'));