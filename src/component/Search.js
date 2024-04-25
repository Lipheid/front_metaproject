import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/Search.css'
import Smile from './image/Smile.svg'
import Searchalt from './image/Searchalt.svg'
export class Search extends Component {
    render() {
        return (
           <div className='search'>
            <Link to='/chatbot' className='click'>
                <div className='text'>내가 원하는 책 검색 Book Bot</div>

                <img src={Searchalt} className='searchalt'/>
            </Link>
           </div>
        )
    }
}

export default Search