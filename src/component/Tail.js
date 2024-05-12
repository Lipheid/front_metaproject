import React, { Component } from 'react'
import './css/Tail.css'
import tail from './image/Tail.svg'


export class Tail extends Component {
    render() {
        return (
           <div className='tail'>
            <img src={tail} className='tailimg'/>
           </div>
        )
    }
}

export default Tail