import React from 'react';
import ReactDOM from 'react-dom';
import Point from './point.jsx'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            
            loop : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42]
        }
    }

    


    render(){
        return(
            <div className='grid'>
                {
                    this.state.loop.map(( el,id ) => {
                        // console.log(id)
                        return <Point key={id}/>
                    })
                }
            </div>
        )
    }
}





ReactDOM.render(<App />, document.getElementById('app'));