import '../../style.css'
import React from 'react'
import { ButtonProps } from './type'
import styles from './styles.module.css'
import clsx from 'clsx'

const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  children,
  ...props
}) => {
  const style = clsx(styles.button, {
    [styles['button--primary']]: primary,
    [styles[`button--${size}`]]: size,
  })

  return (
    <button
      type='button'
      className={style}
      {...props}
    >
      {children}
    </button>
  )
}
export default Button
