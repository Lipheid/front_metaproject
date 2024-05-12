import React, { Component } from 'react'
import './css/Springbook.css'
import springbook from './image/ads/springbook.svg'


export class Springbook extends Component {
    render() {
        return (
           <div className='springbook'>
            <img src={springbook} className='springbookimg'/>
           </div>
        )
    }
}

export default Springbook