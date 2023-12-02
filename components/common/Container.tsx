import React from 'react'

type Props = {
    className?: string,
    children: React.ReactNode
}

const Container = ({ className, children }: Props) => {

  return (
    <div className={`w-full mx-auto px-6 md:w-3/4 md:px-0 ${className ? className : ''}`}>
        {children}
    </div>
  )
}

export default Container