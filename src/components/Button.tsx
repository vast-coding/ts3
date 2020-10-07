import React from 'react'
import { ButtonStyle } from './Button.style'

export interface IButtonProps {
  /**
   * What background color to use -unused
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * What is the button type?
   */
  variant?: 'primary' | 'secondary' | 'outline'
  /**
   * Optional click handler
   */
  onClick?: () => void
  /**
   * Optional child / button contents
   */
  children?: React.ReactNode
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<IButtonProps> = ({
  size = 'medium',
  variant = 'outline',
  backgroundColor,
  children,
  ...props
}) => {
  return (
    <ButtonStyle
      backgroundColor={backgroundColor}
      size={size}
      variant={variant}
      type="button"
      {...props}
    >
      {children}
    </ButtonStyle>
  )
}
