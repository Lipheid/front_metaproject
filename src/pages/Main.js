import React, { Component } from 'react'
import Header from '../component/Header.js';
import Chatbotads from '../component/Chatbotads.js';
import Ads from '../component/Ads.js';
import Header_sub from '../component/Header_sub.js';
import Todaybook from '../component/Todaybook.js';
import Springbook from '../component/Springbook.js'
import Tail from '../component/Tail.js'
import './css/Main.css';
import './css/reset.css'



export class Main extends Component {
    render() {
        return (
        <div className="main">
        <Header_sub/>
        <Header />
        <Ads/>
        <Chatbotads/>
        <Todaybook/>
        <Springbook/>
        <Tail/>
    </div>
        )
    }
}

export default Main
