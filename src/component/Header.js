import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/Header.css'
import Logo from './image/Logo_main.svg'
import Mark from './image/Header_mark.svg'


export class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Link to="/">
                <img src={Logo} className='logo' />
                </Link>
                <div className='item'>
                    <div className='item_inner'>
                    <div className='book_deal'>도서거래</div>
                    <div className='item__contents'>
                    <img src={Mark} className='mark'/>
                    <div className="booksearch">도서명 검색</div>
                    <div className="bookinput">도서 정보 입력</div>
                    </div>
                    </div>
                
                    <div className='search_bookstore'>서점검색</div>
                </div>
            </div>
        )
    }
}

export default Header