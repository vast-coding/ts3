import styled, { css, IDefaultTheme } from 'styled-components'

type TSize = {
  scale: 'small' | 'medium' | 'large'
}

const styleSizes = ({ scale }: TSize) =>
  ({
    small: css`
      font-size: 12px;
      padding: 0 8px;
      border: 1px solid red;
      height: 16px;
    `,
    medium: css`
      font-size: 16px;
      padding: 0 16px;
      border: 1px solid blue;
      height: 32px;
    `,
    large: css`
      font-size: 20px;
      padding: 0 24px;
      border: 1px solid green;
      height: 40px;
    `,
  }[scale])

type TVariant = {
  variant: 'primary' | 'secondary' | 'outline'
  theme: IDefaultTheme
}

const styleVariants = ({ theme, variant }: TVariant) =>
  ({
    primary: css`
      border: 1px solid ${theme.primaryColor};
      background: ${theme.primaryColor};
      color: white;
    `,
    secondary: css`
      border: 1px solid ${theme.secondaryColor};
      background: ${theme.secondaryColor};
      color: white;
    `,
    outline: css`
      border: 1px solid ${theme.secondaryColor};
      background: transparent;
      color: ${theme.secondaryColor};
    `,
  }[variant])

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
  cursor: pointer;
  ${styleSizes};
  ${styleVariants};
  ${overideBg};
  &:disabled {
    border-color: grey;
    background: lightgray;
    color: darkgrey;
    cursor: not-allowed;
  }
  &:active {
    border: 1px solid red;
    background: orange;
    transition: transform 0.05s ease-out;
    transform: scale(0.95);
  }
`

ButtonStyle.displayName = 'StyleButton'
