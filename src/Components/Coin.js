import React from 'react'
import './Coin.css'


function Coin({ name, image, symbol, price, volume, rank, priceChange, marketCap }) {


    return (
        <>

            <div className="container1 ">
                <div className="container data " >
                    <table className="table">
                        <thead className="thead head">
                            <tr className="none">
                                <th scope="col"></th>
                                <th scope="col" className="name" >Name</th>
                                <th scope="col" className="rank" >rank</th>
                                <th scope="col" className="symbol" >symbol</th>
                                <th scope="col" className="price" >Price</th>
                                <th scope="col" className="volume" >Volume</th>
                                {priceChange < 0 ? (
                                    <th className="text-danger loss" >Loss</th>
                                )
                                    : (<th className="text-success profit" >Profit</th>)}

                                <th scope="col" className="cap" >Market Cap</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="col-2">
                                <td><img src={image} className="img" alt="" /></td>
                                <th scope="row" >{name}</th>
                                <td >{rank}</td>
                                <td className="symbol-data" >{symbol}</td>
                                <td >{price.toLocaleString()}</td>
                                <td >{volume.toLocaleString()}</td>

                                {priceChange < 0 ? (
                                    <td className="text-danger">{priceChange.toFixed(2)}%</td>
                                )
                                    : (<td className="text-success">{priceChange.toFixed(2)}%</td>)}
                                <td >{marketCap.toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="table">
                    </table>
                </div>
            </div>
        </>



    )
}

export default Coin
