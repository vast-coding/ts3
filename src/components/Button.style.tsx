import styled from 'styled-components'

type TSize = {
  size?: 'small' | 'medium' | 'large'
}

const sizes = ({ size }: TSize) => {
  if (size === 'small') {
    return `
    font-size: 12px;
    padding: 10px 16px;
    border:1px solid red;
  `
  }

  const defaultSize = `
    font-size: 14px;
    padding: 11px 20px;
    border:1px solid blue;
  `

  if (size === 'medium') {
    return defaultSize
  }

  if (size === 'large') {
    return `
      font-size: 16px;
      padding: 12px 24px;
      border:1px solid green;
  `
  }

  return defaultSize
}

type TVariant = {
  variant?: 'primary' | 'secondary' | 'outline'
}

const variants = ({ variant = 'primary' }: TVariant) => {
  if (variant === 'primary') {
    return `
    border:1px solid blue;
    background:blue;
    color:white;
  `
  }
  if (variant === 'secondary') {
    return `
    border:1px solid purple;
    background:purple;
    color:white;
  `
  }
  if (variant === 'outline') {
    return `
    border:1px solid blue;
    background:white;
  `
  }
  // Outline is default
  return `
    border:1px solid blue;
    background:white;
  `
}

type TBg = {
  backgroundColor?: string
}

const overideBg = ({ backgroundColor }: TBg) => {
  if (backgroundColor) {
    return `
    border:1px solid ${backgroundColor};
    background:${backgroundColor};
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
