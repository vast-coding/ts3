import { ButtonStyle } from './Button.style'
import React from 'react'

export type IButtonProps = {
  /**
   * Optional. What background color to use
   */
  backgroundColor?: string
  /**
   * Optional. How large should the button be?
   */
  scale?: 'small' | 'medium' | 'large'
  /**
   * Optional. What is the button type?
   */
  variant?: 'primary' | 'secondary' | 'outline'
  /**
   * Optional. click handler
   */
  onClick?: () => void
  /**
   * Optional. child / button contents
   */
  children?: React.ReactNode | string
  /**
   * Optional. html button attribute
   */
  type?: 'submit' | 'button' | 'reset' | undefined
  /**
   * Optional. html button attribute
   */
  disabled?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<IButtonProps> = ({
  scale = 'medium',
  variant = 'outline',
  backgroundColor,
  children,
  type = 'button',
  ...props
}) => {
  return (
    <ButtonStyle
      backgroundColor={backgroundColor}
      scale={scale}
      variant={variant}
      type={type}
      {...props}
    >
      {children}
    </ButtonStyle>
  )
}
