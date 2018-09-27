import React, { Component } from 'react'

export default class Task3 extends Component {
    constructor(){
        super();
        this.container = [1,2,3,4];
    }

    render(){
        return(
            <div className='flexClass'>
              {this.container.map((ele,i)=>(<div key={i} className='column'>container-{ele}</div>))}
            </div>
        )
    }
}