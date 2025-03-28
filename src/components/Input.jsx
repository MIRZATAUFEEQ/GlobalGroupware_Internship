import React from 'react'

const Input = ({ inputType, inputPlaceholder, onChange }) => {
    return (
        <div>
            <input type={inputType} placeholder={inputPlaceholder} onChange={onChange} className='w-full px-5 py-1 border border-gray-300 rounded-4xl outline-none' name="" id="" />
        </div>
    )
}

export default Input