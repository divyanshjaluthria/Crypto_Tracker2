import React from 'react';
import './Details.css'

function Details() {
    return (
        <div>
            <div className='container coin-row row-ml  d-flex flex-row justify-items-start align-items-center'>
                <div className='coin d-flex align-items-center'  >
                    {/* <img src={image} alt='crypto' className="coin-logo" /> */}
                    <h1 className="coin-name name">Name</h1>
                    <p className='coin-symbol symbol '>Symbols</p>
                </div>
                <div className='coin-data data d-flex align-items-center '>
                    <p className="coin-rank rank ">Rank</p>
                    <p className="coin-price price ">Price</p>
                    <p className='coin-volume volume '>Volume</p>
                    
                        <p className="coin-percent percent text-danger">Profit/Loss </p>
                    <p className="coin-market-cap market-cap">Market Cap.</p>
                </div>
            </div>
        </div>
    )
}

export default Details
