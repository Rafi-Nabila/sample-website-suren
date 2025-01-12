import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    flex: 1;
    display: flex
    align-items: center;
    text-align: center;
    margin: 0 10px;
    padding: 45px 15px;
    background-color: #ffffff;
    color: #555089;
    transition: all 0.3s;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);`

 const ImageEl = styled.img`
 width: 64px;
 `

export default function IconCard({imageSrc, alt, title}) {
    return (
        <Wrapper>
            <ImageEl src={imageSrc} alt={alt}/>
            <h2>{title}</h2>
        </Wrapper>
    )
}