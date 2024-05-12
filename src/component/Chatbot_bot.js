import React, { Component } from 'react'

import './css/Chatbot_bot.css';
import chatbotlogo from './image/chatbot_logo.svg';
export class Chatbot_bot extends Component {
    render() {
        return (
            <div className='chatbot_main'>
                <div className='chatbot_header'>
                <img src={chatbotlogo} className='logo'/>
                </div>
            <div className="chat-box">
                <div className="chat-log-box">
                    <ul className="chat-log">
                        <li className="ai-chat-log">ai테스트</li>
                        <li className="user-chat-log">유저테스트</li>
                        <li className="ai-chat-log">ai테스트</li>
                        <li className="user-chat-log">유저테스트</li>
                    </ul>
                </div>


                <div className="text-box">
                    <form className="text-form" action="#">
                        <input className="text-bar" type="text" placeholder="ai사서에게 질문해보세요!" />
                        <input className="text-bar-button" type="submit" value="질문" />
                    </form>
                </div>
            </div>
            </div>

        )
    }
}

export default Chatbot_bot
