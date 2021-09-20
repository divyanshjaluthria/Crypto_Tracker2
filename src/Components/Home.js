import React, { useState, useEffect } from 'react'
// import Navbar from './Navbar'
import Section from './Section'
import Coin from './Coin';
import axios from 'axios';
import Footer from './Footer'
import { Link } from 'react-router-dom';
import styled from 'styled-components'



function Home() {

    const [coin, setCoin] = useState([]);

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets`, {
            params: {
                vs_currency: "inr",
                page: "1",
            }
        }).then(res => {
            setCoin(res.data);
            // console.log(res.data);
        }).catch(error => console.log(error))
    }, []);

    const [search] = useState('');

    const filteredCoins = coin.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div>
            <Section />
            {filteredCoins.slice(0, 10).map(
                coin => {
                    return (
                        <Coin
                            key={coin.id}
                            name={coin.name}
                            image={coin.image}
                            symbol={coin.symbol}
                            volume={coin.total_volume}
                            price={coin.current_price}
                            rank={coin.market_cap_rank}
                            priceChange={coin.price_change_percentage_24h}
                            marketCap={coin.market_cap} />
                    )
                }
            )}
            <Button>
            <div className="container d-flex justify-content-center align-itmes-center">
            <Link to="/page1"> <button type="button" className=" btn more1 ">See More</button></Link></div>
            </Button>
            <Footer />
        </div>
    )
}

export default Home

const Button = styled.div`

    .more1{
        background: #064273;
        color: #97f2f3;
    }
`
