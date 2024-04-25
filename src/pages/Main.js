import React, { Component } from 'react'
import Header from '../component/Header.js';
import Search from '../component/Search.js';
import Ads from '../component/Ads.js';
import Header_sub from '../component/Header_sub.js';
import Main_Logo from '../component/Main_logo.js';
import './css/Main.css';
import './css/reset.css'


export class Main extends Component {
    render() {
        return (
        <div className="main">
        <Header_sub/>
        <Main_Logo/>
        <Header />
        <Search/>
        <Ads/>
    </div>
        )
    }
}

export default Main
