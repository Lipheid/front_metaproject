import React, { Component } from 'react'
import './css/Todaybook.css'
import todaybook from './image/ads/todaybook.svg'


export class Todaybook extends Component {
    render() {
        return (
           <div className='today_book'>
            <img src={todaybook}/>
           </div>
        )
    }
}

export default Todaybook