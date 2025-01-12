import React from "react";
import styled from "styled-components";
import IconCard from "./icon-card";
import RepairIcon from "../images/tools.svg";
import MaintainIcon from "../images/maintenance.svg";
import ImproveIcon from "../images/construction.svg";
import MaintenanceImage from "../images/slider-img.png";

const CardWrapper = styled.section`
  display: flex;
  padding: 0 20px;
  margin: 0 76px;
`;

const ImageEl = styled.img`
  width: 100%;
`;

const ParagraphEl = styled.p`
  text-align: left;
`;

const WrapperLeft = styled.div`
  align-content: center;
`;

const SliderContainer = styled.div`
  padding: 120px 20px;
  margin: 0 76px;
`;

const Wrapper = styled.div`
  background-color: #d1e3ff;
`;

export default function MaintenanceSection() {
  return (
    <div>
      <Wrapper>
        <SliderContainer className="row">
          <WrapperLeft className="col-lg-5 col-md-6">
            <h2>Repair and Maintenance Services</h2>
            <ParagraphEl>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum
              voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur,
              tempora iusto, ad possimus soluta hic praesentium mollitia
              consequatur beatae, aspernatur culpa.
            </ParagraphEl>
            <button className="btn btn-primary">Contact Us</button>
          </WrapperLeft>
          <div className="col-lg-7 col-md-6">
            <ImageEl src={MaintenanceImage} alt="Repair and maintenance" />
          </div>
        </SliderContainer>
      </Wrapper>

      <CardWrapper>
        <IconCard imageSrc={RepairIcon} alt="repair" title="Repair" />
        <IconCard imageSrc={ImproveIcon} alt="improve" title="Improve" />
        <IconCard imageSrc={MaintainIcon} alt="maintain" title="Maintain" />
      </CardWrapper>
    </div>
  );
}
