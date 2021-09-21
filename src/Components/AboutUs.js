import LinkedIn from '@mui/icons-material/LinkedIn'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from 'styled-components'

function AboutUs() {
    return (
        <div>
            <Container>
                <div className="container">
                <img src="/"></img>
                <h1 className="title">Divyansh</h1>
                <p className="desc"></p>
                <a href="/" className="linkedin"><LinkedIn></LinkedIn></a>
                <GitHubIcon><a href="/" className="Git"></a></GitHubIcon>
                </div>

            </Container>
        </div>
    )
}

export default AboutUs

const Container = styled.div``
