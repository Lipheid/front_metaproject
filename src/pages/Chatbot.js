import React, { Component } from 'react'
import Chatbot_bot from '../component/Chatbot_bot';
import Header from '../component/Header.js';
import Header_sub from '../component/Header_sub.js';
import Tail from '../component/Tail.js'
import './css/reset.css';
import './css/Main.css';
import './css/Chatbot.css';

export class Chatbot extends Component {
    render() {
        return (
           <div className='main'>
            <Header_sub/>
            <Header/>
            <Chatbot_bot/>
            <Tail/>
           </div>

        )
    }
}

export default Chatbot
