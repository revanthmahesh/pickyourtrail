import React, { Component } from 'react'
import styles from './task1-css'
import PropTypes from 'prop-types'

export default class Task1 extends Component {
    constructor(){
        super();
        // this.state = {...styles}
        this.init();
        window.addEventListener('resize',(e)=>{
             this.adjustParent(e.target)
        })
        
    }

    positionSet(height,width){
        this.position = {
            0:{left:0,right:0,top:0,bottom:0},
            1:{bottom:.75*height,right:.75*width},
            2:{bottom:.75*height,left:.75*width},
            3:{top:.75*height,left:.75*width},
            4:{top:.75*height,right:.75*width},
        }
    }

    adjustParent = ({innerWidth,innerHeight})=>{
        const width = innerWidth>400? .8*innerWidth:innerWidth
        const height = .6*innerHeight;
        this.setState(({parent,child,button})=>({
            parent: {...parent,width,height},
            child:{...child,height:height/4, width:width/4},
        }))
        this.positionSet(height,width);
        const {step,child} = this.state;
        this.stateChange(step,child);
    }

    init = ()=>{
    const {innerHeight, innerWidth} = window;
    const height = .6*innerHeight;
    const width = innerWidth>400? .8*innerWidth:innerWidth
    this.state = {
     step: 1,
     parent : { ...styles.parent,height,width},
     child: {...styles.child, height:height/4, width:width/4},
     button: {...styles.button}         
    }
    this.positionSet(height,width)
    }
    forward = ()=>{
        let {step,child} = this.state;
        step = step === 4 ? 1 : step + 1;
        this.stateChange(step,child)
    }
    stateChange = (step,child)=>{
        this.setState({
            step,
            child: {...child,...this.position[0],...this.position[step]}
          })
    }
    backward = ()=>{
        let {step,child} = this.state;
        step = step === 1 ? 4 : step - 1;
        this.stateChange(step,child)
    }

    render(){
        return(
            <div style={this.state.Container}>
              <Container {...this.state}/>
              <Button {...this.state} forward={this.forward} backward ={this.backward}/>
            </div>
        )
    }
}

function Container(props){
    return(
       <div style = {props.parent}>
          <div style={props.child}>
               
          </div>
       </div>
    )
}

function Button(props){
   return(
       <div style={props.button} >
           <button onClick={props.forward}>forward</button>
           <button onClick={props.backward}>backward</button>
       </div>
   )
}