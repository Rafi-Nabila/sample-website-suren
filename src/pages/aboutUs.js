import React from "react";
import styled from "styled-components";
import AboutImage from "../images/about-img.jpg";

const Wrapper = styled.section`
  display: flex;
  padding: 120px 20px;
  margin: 0 76px;
`;

const ImageEl = styled.img`
  width: 530px;
  height: 360px;
`;

const ParagraphEl = styled.p`
  text-align: left;
`;

export default function AboutUs() {
  return (
    <Wrapper className="row">
      <div className="col-lg-5 col-md-6">
        <h2>ABOUT US</h2>
        <ParagraphEl>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomisedThere are many variations of passages of Lorem
          Ipsum available, but the majority have suffered alteration in some
          form, by injected humour, or randomised
        </ParagraphEl>
        <button className="btn btn-primary">READ MORE</button>
      </div>
      <div className="col-lg-7 col-md-6">
        <ImageEl src={AboutImage} alt="About US" />
      </div>
    </Wrapper>
  );
}
