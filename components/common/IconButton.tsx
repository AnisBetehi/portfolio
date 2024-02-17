import React from 'react'

type IProps = {
    Icon: React.FC;
    text: string;
    [x: string]: any
}
const IconButton: React.FC<IProps> = ({ Icon, text, className, ...props }) => {

  return (
    <button
        type="button"
        className={`group px-6 py-2.5 text-slate-200 bg-zinc-800 font-semibold relative rounded-full flex gap-2 items-center duration-200 origin-bottom hover:scale-[1.12] hover:bg-white hover:text-black ${className} text-sm md:text-[1rem]`}
        {...props}
    >
        <Icon className="text-lg" />
        {text}
    </button>
  )
}

export default IconButton