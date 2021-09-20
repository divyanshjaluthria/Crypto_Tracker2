import React from 'react'
import styled from 'styled-components';


function Section(props) {
    return (
        <>
            <Container className="landing d-flex ">
                <div className="btn btn-dark mode">Dark🌙</div>
                <Content className=" content d-flex justify-content-center align-items-center flex-column">
                    <h1 className="pe-none title">Crypto Tracker</h1>
                    <p className="para">Crypto Tracker Will Make your lIfe Easier</p>
                    <img src="./btc.png.png" className="image-fluid" alt="" />
                    <div className="more btn ">Explore More</div>
                </Content>

            </Container>
            <Top className="d-flex container justify-content-center">
                <h1>Top Ranked</h1>
            </Top>
        </>
    )
}

export default Section

const Container = styled.div`
    width: 100vw;
    min-height: 90vh;
    align-content: center;
    background: linear-gradient(180deg, rgba(151,242,243,1) 0%, rgba(132,206,209,1) 100%);
;
    justify-content: center;

    .title{
        color: 	#064273;
    }
    .para{
        color: 	#064273;
        font-weight: bold;
    }
    
    .mode{
        position: absolute;
        margin-right: 3vh;
        height: 6vh;
        right: 0;
        top: 3vh;
        overflow-y: hidden;
    }
    
    
    
    
    `
const Content = styled.div`


h1{
    font-size: 70px;
    color: white;
    margin-top: 5vh;
    padding: 10px;
}

p{
    color: whitesmoke;
}

img{
    height: 40vh;
}

.more{
    padding: 1.5vh 2vw;
    background: #def3f6;
    color: 	#064273;
}

`

const Top = styled.div`
 min-height: 10vh;
 margin-top: 10vh;
 margin-bottom: 30px;


`




