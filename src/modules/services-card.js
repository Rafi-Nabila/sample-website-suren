import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
margin-top: 30px;
    text-align: center;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.15);
    padding: 25px 15px;
    transition: all .3s;
    display: flex;
    align-items: center;
    flex-flow: column;
    margin: 10px;
`
const ImageEl = styled.img`
width: 65px;
`;

const CardHeader = styled.h3`
`;

const CardContent = styled.p`
`;

export default function ServicesCard({src, header, content}) {
    return (
        <CardWrapper>
            <ImageEl src={src}></ImageEl>
            <CardHeader>{header}</CardHeader>
            <CardContent>{content}</CardContent>
        </CardWrapper>
    )
}