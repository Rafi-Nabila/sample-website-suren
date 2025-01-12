import React from "react";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faCircleStop } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.section`
  background-color: #0a0f43;
  padding: 75px 0;
  color: #ffffff;
`;
const Divider = styled.span`
  flex-grow: 1;
  border-bottom: 1px solid white;
  margin: 6px 1px;
`;
fontawesome.library.add(faCircleStop);

export function Footer() {
  return (
    <Wrapper>
      <h3>GET IN TOUCH</h3>
      <div className="d-flex align-items-center">
        <FontAwesomeIcon icon="fa fa-solid fa-circle-stop" />
        <Divider />
        <FontAwesomeIcon icon="fa fa-solid fa-circle-stop" />
        <Divider />
        <FontAwesomeIcon icon="fa fa-solid fa-circle-stop" />
      </div>
      <h3>FOLLOW US</h3>
    </Wrapper>
  );
}
