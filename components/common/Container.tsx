import React from 'react'

type Props = {
    className?: string;
    children?: React.ReactNode;
}

const Container = ({ className, children }: Props) => {

  return (
    <div className={`w-full mx-auto px-6 md:w-3/5 lg:w-2/5 lg:px-0 ${className ? className : ''}`}>
        {children}
    </div>
  )
}

export default Container