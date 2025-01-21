import React from 'react'

export const TextField = ({ label, value, onChange, placeholderText, heightSize }) => {
  return (
    <>
      <label htmlFor={value} className='text-lg font-semibold'>
        {label}
      </label>
      <textarea
        type='text'
        value={value}
        onChange={onChange}
        placeholder={placeholderText}
        style={{ height: `${heightSize}px` }}
        className='h-[${heightSize}px] w-full rounded-lg border-2 border-neutral-primary bg-neutral-primary p-1.5 text-sm text-neutral-secondary placeholder:text-neutral-secondary'
      />
    </>
  )
}
