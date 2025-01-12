import React from "react";
import styled from "styled-components";
import { IconLink } from "../components/icon-link";

const Wrapper = styled.div`
  padding: 15px 0 15px 30px;
  background-color: #000000;
`;

const HeaderItems = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function HeaderTop() {
  return (
    <Wrapper>
      <div class="container-fluid">
        <HeaderItems>
          <IconLink
            iconClass="fa-phone"
            text="Call : +01 123455678990"
          ></IconLink>
          <IconLink
            iconClass="fa-envelope"
            text="Email : demo@gmail.com"
          ></IconLink>
        </HeaderItems>
      </div>
    </Wrapper>
  );
}
