import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/Chatbotads.css'

export class Chatbotads extends Component {
    render() {
        return (
           <div className='chatbot_ads' >
            <Link to="/chatbot" className='adsimg'>
            </Link>
           </div>

        )
    }
}

export default Chatbotads