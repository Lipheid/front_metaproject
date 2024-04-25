import React, { Component } from 'react'
import './css/Header_sub.css'



export class Header_sub extends Component {
    render() {
        return (
            <div className='header_sub'>
                <div className='mini'>
                    <div className='loginmenu'>
                        <div className='option_a'>로그인</div>
                        <div className='option_b'>회원가입</div>
                        <div className='option_c'>마이페이지</div>
                        <div className='option_b'>고객센터</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header_sub