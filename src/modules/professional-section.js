import React from "react";
import styled from "styled-components";
import ProfessionalImage from "../images/professional-img.png";

const Wrapper = styled.section`
  display: flex;
  padding: 120px 20px;
  background-color: #d1e3ff;
`;

const ImageEl = styled.img`
  width: 100%;
`;

const ParagraphEl = styled.p`
  text-align: left;
`;

const HeaderEl = styled.h2`
font-weight: bold;
text-transform: uppercase;
color: #0355cc;
`

export default function ProfessionalSection() {
  return (
    <Wrapper className="row">
      <div className="col-lg-7 col-md-6">
        <ImageEl src={ProfessionalImage} alt="Professional image" />
      </div>
      <div className="col-lg-5 col-md-6 align-content-center">
        <HeaderEl>We Provide Professional Home Services.</HeaderEl>
        <ParagraphEl>
        randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All randomised words which don't look even slightly
        </ParagraphEl>
        <button className="btn btn-warning">READ MORE</button>
      </div>
    </Wrapper>
  );
}
