import React, { useState, useContext } from 'react'

import styled, { ThemeContext } from 'styled-components'
import { Link as ReactRouterDomLink, useLocation } from 'react-router-dom'
import { Button, Toggle } from 'components'

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  display: flex;
  > button {
    padding: 0 16px;
  }
  position: fixed;
  top: 0;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.secondary[7]},
    ${(props) => props.theme.primary[7]}
  );
  border-bottom: 3px solid ${(props) => props.theme.primary[9]};
`

type TMenuProps = {
  isOpen: boolean
}

const Menu = styled.nav<TMenuProps>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  border-bottom: 3px solid ${(props) => props.theme.secondaryColor};
  background: ${(props) => props.theme.bodyBackgroundColor};
  @media (min-width: 760px) {
    display: flex;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
    background: none;
    left: initial;
    top: initial;
  }
`

type TLinkProps = {
  isActive: boolean
  children?: React.ReactNode | string
  to: string
}

const Link: React.FC<TLinkProps> = ({ isActive, children, ...props }) => (
  <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>
)

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  color: ${(props) => props.theme.primary[0]};
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  font-size: ${(props) => props.theme.fontSizes[1]}px;
`

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;
  > div {
    height: 3px;
    background: ${(props) => props.theme.primary[9]};
    margin: 5px 0;
    width: 100%;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

export function Header() {
  console.log('Header()')
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const {
    id,
    toggleThemeColors,
    fontSizes,
    increaseFontSize,
    decreaseFontSize,
  } = useContext(ThemeContext)
  console.log({ fontSizes })
  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setMenuOpen((prev) => !prev)}>
        <div></div>
        <div></div>
        <div></div>
      </MobileMenuIcon>
      <Menu isOpen={menuOpen}>
        <StyledLink to="/" isActive={pathname === '/'}>
          Home
        </StyledLink>
        <StyledLink to="/login" isActive={pathname === '/login'}>
          Login
        </StyledLink>
        <StyledLink to="/palette" isActive={pathname === '/palette'}>
          Palette
        </StyledLink>
        <Toggle isActive={id === 'dark'} onToggle={toggleThemeColors} />
        <Button variant="primary" onClick={decreaseFontSize}>
          -a+
        </Button>
        <Button variant="primary" onClick={increaseFontSize}>
          -A+
        </Button>
      </Menu>
    </HeaderWrapper>
  )
}
