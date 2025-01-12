import React from "react";
import styled from "styled-components";
import { Link } from "../components/link";

const Wrapper = styled.div`
  background-color: #d1e3ff;
`;

const AnchorEl = styled.a`
color: #000;
text-decoration: none;
padding: 10px 25px;
`

export function NavigationBar() {
  return (
    <Wrapper>
      <nav class="navbar navbar-expand-lg navbar-primary d-flex px-5">
        <Link url="#" text="inance" styleClass="navbar-brand"></Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse d-flex justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <AnchorEl class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </AnchorEl>
            </li>
            <li class="nav-item">
              <AnchorEl class="nav-link" href="#">
                About
              </AnchorEl>
            </li>
            <li class="nav-item">
              <AnchorEl class="nav-link" href="#">
                Services
              </AnchorEl>
            </li>
            <li class="nav-item">
              <AnchorEl class="nav-link" href="#">
                Contact Us
              </AnchorEl>
            </li>
          </ul>
        </div>
      </nav>
    </Wrapper>
  );
}
