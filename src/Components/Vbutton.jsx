import React from 'react'

const Vbutton = ({ variant, text }) => {
    return (
        <button className={`${variant === 'bold' ? 'bg-black text-white' : variant === 'outline' ? 'border' : ''} rounded items-center justify-center flex w-12 h-9 cursor-pointer `}>
            {text}
        </button>
    )
}

export default Vbutton
