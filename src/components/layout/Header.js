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
        <HamburgerWrapper>
          <MenuButton
            item={{ title: "", icon: "/images/icons/hamburger.svg", link: "" }}
          />
        </HamburgerWrapper>
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

  @media (max-width: 768px) {
    top: 30px;
  }

  @media (max-width: 450px) {
    top: 20px;
    padding: 0px 20px;
  }
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);

  @media (max-width: 768px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`
const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`
