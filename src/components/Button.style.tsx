import styled, { css, IDefaultTheme } from 'styled-components'

type TSize = {
  size?: 'small' | 'medium' | 'large'
}

const sizes = ({ size }: TSize) => {
  if (size === 'small') {
    return css`
      font-size: 12px;
      padding: 0 8px;
      border: 1px solid red;
      height: 16px;
    `
  }

  const defaultSize = css`
    font-size: 16px;
    padding: 0 16px;
    border: 1px solid blue;
    height: 32px;
  `

  if (size === 'medium') {
    return defaultSize
  }

  if (size === 'large') {
    return css`
      font-size: 16px;
      padding: 0 24px;
      border: 1px solid green;
      height: 40px;
    `
  }

  return defaultSize
}

type TVariant = {
  variant?: 'primary' | 'secondary' | 'outline'
  theme: IDefaultTheme
}

const variants = ({ variant, theme }: TVariant) => {
  if (variant === 'primary') {
    return css`
      border: 1px solid ${theme.primaryColor};
      background: ${theme.primaryColor};
      color: white;
    `
  }
  if (variant === 'secondary') {
    return css`
      border: 1px solid ${theme.secondaryColor};
      background: ${theme.secondaryColor};
      color: white;
    `
  }
  if (variant === 'outline') {
    return css`
      border: 1px solid ${theme.secondaryColor};
      background: white;
    `
  }
  // Outline is default
  return css`
    border: 1px solid ${theme.secondaryColor};
    background: white;
  `
}

type TBg = {
  backgroundColor?: string
}

const overideBg = ({ backgroundColor }: TBg) => {
  if (backgroundColor) {
    return css`
      border: 1px solid ${backgroundColor};
      background: ${backgroundColor};
    `
  }
}
type TButtonStyles = TSize & TVariant & TBg

export const ButtonStyle = styled.button<TButtonStyles>`
  border-radius: 4px;
  ${sizes};
  ${variants};
  ${overideBg};
`
