import styled, { css, IDefaultTheme } from 'styled-components'

type TSize = {
  scale: 'small' | 'medium' | 'large'
  theme: IDefaultTheme
}

const styleSizes = ({ scale, theme }: TSize) => {
  return {
    small: css`
      font-size: ${theme.fontSizes[0]}px;
      padding: 0 8px;
      height: 16px;
    `,
    medium: css`
      font-size: ${theme.fontSizes[1]}px;
      padding: 0 16px;
      height: 32px;
    `,
    large: css`
      font-size: ${theme.fontSizes[2]}px;
      padding: 0 24px;
      height: 40px;
    `,
  }[scale]
}

type TVariant = {
  variant: 'primary' | 'secondary' | 'outline'
  theme: IDefaultTheme
}

const styleVariants = ({ theme, variant }: TVariant) =>
  ({
    primary: css`
      border: 1px solid ${theme.primary[5]};
      background: ${theme.primary[5]};
      color: ${theme.primary[0]};
      &:hover {
        border-color: ${theme.primary[6]};
        background: ${theme.primary[6]};
      }
    `,
    secondary: css`
      border: 1px solid ${theme.secondary[5]};
      background: ${theme.secondary[5]};
      color: ${theme.secondary[0]};
      &:hover {
        border-color: ${theme.secondary[6]};
        background: ${theme.secondary[6]};
      }
    `,
    outline: css`
      border: 1px solid ${theme.greys[6]};
      background: transparent;
      color: ${theme.greys[6]};
      &:hover {
        border-color: ${theme.greys[9]};
        color: ${theme.greys[9]};
      }
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
  overflow: hidden;
  line-height: 1;
  user-select: none;

  ${styleSizes};
  ${styleVariants};
  ${overideBg};
  &:disabled {
    border-color: ${(props) => props.theme.greys[6]};
    background: ${(props) => props.theme.greys[2]};
    color: ${(props) => props.theme.greys[6]};
    cursor: not-allowed;
  }
  &:focus {
    outline: none;
    /* border: 1px solid #4d90fe; */
    box-shadow: 0px 0px 0px 2px ${(props) => props.theme.greys[0]},
      0px 0px 0px 4px #4d90fe;
    z-index: 10;
    -webkit-appearance: none;
    position: relative;
    transition: box-shadow 0.1s ease-in-out;
  }

  &:active {
    transition: transform 0.05s ease-out;
    transform: scale(0.95);
  }
  &:hover {
  }
`

ButtonStyle.displayName = 'StyleButton'
