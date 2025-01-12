import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
 padding: 120px 20px;
 margin: 0 76px;
`;

const HeaderEl = styled.h2`
text-align: left;
`

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputEl = styled.input`
  height: 50px;
  width: 350px;
  margin: 10px;
  padding: 0 10px 0 29px;
`;

const MessageInputEl = styled.input`
  height: 100px;
  width: 350px;
  margin: 10px;
  padding: 0 10px 0 29px;
`;

export default function ContactUs() {
  return (
    <Wrapper>
      <HeaderEl className="text-left">CONTACT US</HeaderEl>
      <FormWrapper>
        <InputEl type="text" name="name" placeholder="Name" />
        <InputEl type="tels" name="name" placeholder="Phone Number" />
        <InputEl type="email" name="email" placeholder="Email" />
        <MessageInputEl type="text" placeHolder="Message"/>
        <InputEl type="submit" value="Send" className="btn btn-primary"/>
      </FormWrapper>
    </Wrapper>
  );
}
