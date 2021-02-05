import React from "react"
import styled, { keyframes } from "styled-components"
import MockupAnimation from "../animations/MockupAnimation"
import WaveBackground from "../backgrounds/WaveBackground"
import PurchaseButton from "../Buttons/PurchaseButton"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"
function HeroSection() {
  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>Design & code iOS apps using SwiftUI</Title>
          <Description>
            The place for some amazing design techniques for Swift UI and
            indepth hands-on experience on all the walkthroughs of the tutorials
            on your system!
          </Description>
          <PurchaseButton
            title="Start Exploring"
            subtitle="120+ hours of content"
          />
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  )
}
export default HeroSection

const animation = keyframes`
  0% {opacity : 0; transform: translateY(-10px); filter: blur(10px);}
  100% {opacity : 1; transform: translateY(0px); filter: blur(0px); }
`

const Wrapper = styled.div`
  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0.5s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(1) {
      animation-delay: 0s;
    }
  }
`
const Title = styled(H1)`
  color: ${themes.dark.text1};
`
const Description = styled(MediumText)``
