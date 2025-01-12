import React from 'react';
import styled from 'styled-components';

const LinkEl = styled.a`
color: #0355cc;
text-transform: uppercase;
font-weight: bold;
font-size: 24px;
text-decoration: none;
`

export function Link({url, text, styleClass}) {
    return (
        <LinkEl href={url} class={styleClass}>{text}</LinkEl>
    )
}