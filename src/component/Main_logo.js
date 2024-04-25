import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/Main_logo.css'
import Logo_main from './image/Logo_main.svg'
export class Main_Logo extends Component {
    render() {
        return (
           <div className='logo_main'>
            <img src={Logo_main} className='logo_main_img'/>
           </div>
        )
    }
}

export default Main_Logo