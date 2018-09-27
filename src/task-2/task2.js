import React, { Component } from 'react'

export default class Task2 extends Component {
    constructor(){
        super();
        this.state={
            list:[],
            value:''
        }
        
    }
    insertValue = ()=>{
        const {value,list} = this.state;
        if(value && value.trim()){
            this.setState({
                list: [...list, value],
                value:''
            })
        }else{
            this.setState({
                value:''
            })
        }

    }
    changeValue = (e) => {
          this.setState({value: e.target && e.target.value })
    }

    render(){
        const {value, list} = this.state;
        return(
            <div className='list-container'>
                <input type='text' onChange={this.changeValue} value={value}/>
                <button onClick={this.insertValue}>Insert</button>
                <div className='list-display'>
                { list.map((ele,i)=>(<List key={i} value={ele} index={i+1}/>))}
                </div>
              
            </div>
        )
    }
}

function List({index,value}){
    return(
        <div>
           <p>
               <span>{index} </span>
               <span>{value} </span>
           </p>
        </div>
    )
}