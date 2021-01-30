import React, { useState } from "react"
import styled from "styled-components"
import { tooltipData } from "../../data/MenuData"
export default function MenuTooltip() {
  const [isOpen, setisOpen] = useState(false)

  return (
    <Wrapper isOpen={isOpen} onClick={() => setisOpen(!isOpen)}>
      {tooltipData.map((item, index) => (
        <MenuButton item={item} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
  padding: 20px;
  position: absolute;
  top: 60px;
  right: 30px;
  opacity: ${props => (props.isOpen ? 1 : 0.5)};
`

const MenuButton = styled.p`
  position: static;
  width: 180px;
  height: 44px;
  left: 0px;
  top: 88.5px;
`
