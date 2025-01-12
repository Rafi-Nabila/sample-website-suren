import React from "react";
import styled from "styled-components";

const Wrapper = styled.a`
  color: #ffffff;
`;

export function IconLink({ iconClass, text }) {
  return (
    <Wrapper>
        <i class={`fa ${iconClass} px-1`} aria-hidden="true"></i>
        <span>{text}</span>
    </Wrapper>
  );
}
