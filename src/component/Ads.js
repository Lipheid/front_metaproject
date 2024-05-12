import React, { Component } from 'react'
import './css/Ads.css'
import ads1 from './image/ads/ads_1-1.svg'

export class Ads extends Component {
    render() {
        return (
           <div className='ads'>
            <div className='adsimg'>
                <img src={ads1} className='adsimg_1'/>
            </div>
           </div>
        )
    }
}

export default Ads