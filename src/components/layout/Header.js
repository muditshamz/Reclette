import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"

import { menuData } from "../../data/MenuData"
import MenuButton from "../Buttons/MenuButton"
import MenuTooltip from "../tooltip/MenuToolTip"

export default function Header() {
  const [isOpen, setisOpen] = useState(false)
  function handelClick(event) {
    setisOpen(!isOpen)
    event.preventDefault()
  }
  return (
    <Wrapper>
      <Link to="/">
        <img src="/images/logos/logo.svg" alt="Logo" />
      </Link>
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) =>
          item.link === "/account" ? (
            <MenuButton
              key={index}
              item={item}
              onClick={event => handelClick(event)}
            />
          ) : (
            <MenuButton key={index} item={item} />
          )
        )}
      </MenuWrapper>
      <MenuTooltip isOpen={isOpen} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0px 30px;
  align-items: center;
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);
`
