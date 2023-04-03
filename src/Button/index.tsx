import React from 'react'

import './styles.sass'
import classnames from 'classnames'

export interface ButtonProps {
  className?: string
  children?: React.ReactNode
}

export const Button = ({ className = '', children = 'Button' }: ButtonProps) => {
  const ButtonClass = classnames('button', className)

  return <button className={ButtonClass}>{children}</button>
}
