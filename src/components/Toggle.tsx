import React from 'react'
import styled from 'styled-components'

const ToggleWrapper = styled.div`
  border-radius: 25px;
  border: 1px solid ${(props) => props.theme.primary[9]};
  cursor: pointer;
  display: flex;
  height: 25px;
  margin: auto;
  min-width: 50px;
  width: 50px;
  background: ${(props) => props.theme.primary[0]};
`

type TNotchProps = {
  isActive: boolean
}

const Notch = styled.div<TNotchProps>`
  height: 21px;
  width: 21px;
  border: 1px solid ${(props) => props.theme.primary[9]};
  margin-top: 1px;
  background: ${(props) => props.theme.primary[0]};
  border-radius: 50%;
  transition: transform 0.1s linear;
  transform: translate(${(props) => (props.isActive ? '26px' : '1px')});
`

type TToggleProps = {
  isActive: boolean
  onToggle: () => void
}

export const Toggle: React.FC<TToggleProps> = ({ isActive, onToggle }) => {
  return (
    <ToggleWrapper onClick={onToggle}>
      <Notch isActive={isActive}></Notch>
    </ToggleWrapper>
  )
}
