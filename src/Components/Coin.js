import React from 'react'
import './Coin.css'

function Coin({ name, image, symbol, price, volume, rank, priceChange, marketCap }) {
    return (
        <>
        <div className="contain">
        <div className='coin-container d-flex justify-content-center ' >
                <div className='coin-row row-ml  d-flex flex-row justify-items-start align-items-center'>
                    <div className='coin  d-flex align-items-center'  >
                        <img src={image} alt='crypto' className="coin-logo" />

                        <h1 className="coin-name">{name}</h1>
                        <p className='coin-symbol '>{symbol}</p>

                    </div>
                    <div className='coin-data d-flex align-items-center '>
                        <p className="coin-rank ">Rank #{rank}</p>
                        <p className="coin-price ">Price <br />Rs {price.toLocaleString()}</p>
                        <p className='coin-volume '>Volume <br />Rs {volume.toLocaleString()}</p>
                        {priceChange < 0 ? (
                            <p className="coin-percent text-danger">Loss {priceChange.toFixed(2)}% </p>
                        )
                            : (<p className="coin-percent text-success">Profit {priceChange.toFixed(2)}%</p>)
                        }
                        <p className="coin-market-cap">Market Cap. {marketCap.toLocaleString()}</p>
                    </div>
                </div>

            </div>
            </div>
            </>



            )
}

            export default Coin
