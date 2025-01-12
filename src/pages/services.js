import React from "react";
import styled from "styled-components";
import ServicesCard from "../modules/services-card";
import maintenanceImage from "../images/s1.png";
import electricalImage from "../images/s2.png";
import plumbingImage from "../images/s3.png";

const HeaderEl = styled.h2`
margin-bottom: 40px;
`;
const CardWrapper = styled.section`
  display: flex;
  margin-bottom: 30px;
`;

const Wrapper = styled.div`
  padding: 120px 20px;
  margin: 0 76px;
`;

const cardContent =
  "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal";

export default function Services() {
  return (
      <Wrapper>
        <HeaderEl>OUR SERVICES</HeaderEl>
        <CardWrapper>
          <ServicesCard
            src={maintenanceImage}
            header="Maintenance"
            content={cardContent}
          />
          <ServicesCard
            src={electricalImage}
            header="Electrical"
            content={cardContent}
          />
          <ServicesCard
            src={plumbingImage}
            header="Plumbing"
            content={cardContent}
          />
        </CardWrapper>
        <button className="btn btn-primary">VIEW MORE</button>
      </Wrapper>
  );
}
