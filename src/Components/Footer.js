import React from 'react'
import styled from 'styled-components'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Facebook from '@mui/icons-material/Facebook';


function Footer() {
    return (
        <Container>
            <div className="footer d-flex justify-content-center align-items-center flex-column">
                <Social className="container  d-flex">
            <a href="facebook.com"><Facebook className="fb" ></Facebook></a>
            <a href="twitter"><TwitterIcon className="tw"/></a>
            <a href="instagram.com"><InstagramIcon className="ig"/></a>
            <a href="linkedin.com"><LinkedInIcon className="li"/></a></Social>
                <p className="content">Content Designed & Created by Divyansh Jaluthria © 2021</p>
            </div>
        </Container>
    )
}

export default Footer


const Container = styled.div`

background: linear-gradient(180deg, rgba(151,242,243,1) 0%, rgba(132,206,209,1) 100%);
color: #064273;



.footer{
    height: 30vh;
}

`

 const Social = styled.div`
    justify-content: center;
 align-items: center;
 width: 20vw;
 padding: 15px;
 height: auto;

 .fb {
     font-size: 40px;
     color: #064273;
    }
    
    .tw{
        font-size: 40px;
        color: #064273;

    }
    
    .ig{
        font-size: 40px;
        color: #064273;

    }
    .li{
        font-size: 40px;
        color: #064273;

}

.content{
    color: #064273;

}
 `
 


